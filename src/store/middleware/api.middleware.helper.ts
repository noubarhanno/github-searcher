import { API_HEADERS_COMMON_CONFIG, API_CONFIG } from './api.config';
import {
    EMethods,
    IPayload,
    IApiMiddlewareAction,
    IMultiRequestPayload,
    IApiMiddlewareMultiAction,
} from '../store.interface';
import { API, API_MULTI } from '../types';
import axios from 'axios';

export type TNetwork = {
    url: string;
    method: EMethods;
    data: object;
    headers?: object;
    isAbsoluteUrl?: boolean;
};

export type TMultiNetwork = {
    requests: TNetwork[];
};
export const NetworkRequest = async <T = any>({
    url,
    method,
    data: bodyOrParams,
    headers,
    isAbsoluteUrl,
}: TNetwork): Promise<{ data: T }> => {
    const { baseURL } = API_CONFIG;

    // Sets request "Headers" and baseURL common attributes
    axios.defaults.headers.common = headers || API_HEADERS_COMMON_CONFIG;
    axios.defaults.baseURL = isAbsoluteUrl ? '' : baseURL;

    const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';
    try {
        const { data } = await axios.request({
            url,
            method,
            [dataOrParams]: { ...bodyOrParams },
        });
        return Promise.resolve({ data });
    } catch (exception) {
        return Promise.reject(exception);
    }
};

/**
 *
 * @param {TMultiNetwork} {requests} requests that include multiple network requests information
 */
export const MultiNetworkRequest = async ({ requests }: TMultiNetwork): Promise<any> => {
    const { baseURL } = API_CONFIG;
    const transformedRequests = requests.map((request) => {
        const { url, method, data, isAbsoluteUrl, headers } = request;
        /**
         * define the type of the data params or body data
         */
        const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';
        /**
         * ovveride the headers or inject the default
         */
        axios.defaults.headers.common = headers || API_HEADERS_COMMON_CONFIG;
        axios.defaults.baseURL = isAbsoluteUrl ? '' : baseURL;
        return axios.request({
            url: url,
            method: method,
            [dataOrParams]: data,
        });
    });
    try {
        const responses = await axios.all(transformedRequests);
        return Promise.resolve(responses);
    } catch (errs) {
        return Promise.reject(errs);
    }
};

/**
 * data required for returning correct action object single request
 * @param {object} headers
 * @param {string} label
 * @param {EMethods} method
 * @param {boolean} isAbsoluteUrl
 * @param {function} onSuccess
 * @param {function} onFailure
 * @param {string} url
 * @param {object} data
 */
export const apiAction = ({
    headers,
    label,
    method,
    isAbsoluteUrl,
    onSuccess,
    onFailure,
    onFinally,
    url,
    data,
}: IPayload): IApiMiddlewareAction => {
    return {
        type: API,
        payload: {
            headers,
            label,
            method,
            onSuccess,
            onFailure,
            onFinally,
            isAbsoluteUrl,
            url,
            data,
        },
    };
};

/**
 * data required for returning correct action object single request
 * @param {array} requests
 * @param {string} label
 * @param {function} onSuccess
 * @param {function} onFailure
 */
export const apiMultiAction = ({
    onSuccess,
    onFailure,
    onFinally,
    requests,
    label,
}: IMultiRequestPayload): IApiMiddlewareMultiAction => {
    return {
        type: API_MULTI,
        payload: {
            label,
            requests,
            onSuccess,
            onFailure,
            onFinally,
        },
    };
};
