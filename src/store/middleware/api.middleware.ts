import { Dispatch, MiddlewareAPI, AnyAction } from 'redux';
import { apiStart, apiError } from '../actions/api.actions';
import { API, API_MULTI } from '../types';

import { IApiMiddlewareAction } from '../store.interface';
import { NetworkRequest, MultiNetworkRequest } from './api.middleware.helper';

/**
 * middleware make the initiative load and inject the required parameters
 * @param {MiddlewareAPI} dispatch
 * @param {Dispatch} next
 * @param {any} action
 */
const apiMiddleware = ({ dispatch }: MiddlewareAPI<any>) => (next: Dispatch<IApiMiddlewareAction>) => async (
    action: any,
) => {
    next(action);

    /**
     * on single request
     */
    if (action.type === API) {
        const { label, url, data, method, headers, onSuccess, onFailure, onFinally, isAbsoluteUrl } = action.payload;

        /**
         * initial
         */
        if (label) {
            dispatch(apiStart(label));
        }

        /**
         * do the network request
         */
        try {
            const { data: incomingData } = await NetworkRequest({
                url,
                method,
                headers,
                data,
                isAbsoluteUrl,
            });

            if (onSuccess) {
                dispatch(onSuccess(incomingData));
            }
        } catch (error) {
            /**
             * function to handle mutiple kinds of errors
             * @param {any} error could be response or network error
             * @param {function} onFailure
             * @param {string} label
             * @param {Dispatch} dispatch
             */
            handleError(error, onFailure, label, dispatch);
        }

        if (onFinally) {
            /**
             * network request end
             */
            dispatch(onFinally());
        }
        /**
         * on multi request
         */
    } else if (action.type === API_MULTI) {
        const { label, requests, onSuccess, onFailure, onFinally } = action.payload;

        if (label) {
            dispatch(apiStart(label));
        }
        if (requests && requests.length > 0) {
            try {
                const responses = await MultiNetworkRequest({ requests });
                if (onSuccess) {
                    dispatch(onSuccess(responses));
                }
            } catch (error) {
                handleError(error, onFailure, label, dispatch);
            }
        }
        if (onFinally) {
            dispatch(onFinally());
        }
    }
};

const handleError = (
    error: any,
    onFailure: (errorMessage: string, error: object) => AnyAction,
    label: string,
    dispatch: Dispatch,
) => {
    const errorResponseStatus = (error.response || {}).status || 0;

    let errorMessage;

    // In case of "Network Error" error should show "Network connection..." message
    if (/network\serror/gi.test(error)) {
        // To be localised later!
        errorMessage = 'Oops, something went wrong! Please check your network connection and try again.';
    }

    // In case of 5* error should show "Something went wrong..." message
    // String interpolation to convert code into String
    else if (`${errorResponseStatus}`.charAt(0) === '5') {
        errorMessage = 'Oops! Something went wrong, please try again later.';

        // Anything else
    } else if (error && error.response) {
        errorMessage = error.response.data.message;
    } else {
        errorMessage = error.message;
    }

    if (onFailure) {
        dispatch(onFailure(errorMessage || error.message, error));
    }
    dispatch(apiError(errorMessage, label));
};

export default apiMiddleware;
