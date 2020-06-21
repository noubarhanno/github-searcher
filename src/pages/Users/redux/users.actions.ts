import { FETCH_USERS, FETCH_USERS_DETAILS, SET_USERS_DETAILS } from './users.types';
import { Dispatch } from 'redux';
import { IState, EMethods, INetworkRequest } from 'store/store.interface';
import { apiAction, apiMultiAction } from 'store/middleware/api.middleware.helper';
import { apiEnd } from 'store/actions/api.actions';
import API from 'config/api.constants';
import { IUser } from './users.interface';

export const fetchUsers = () => (dispatch: any, getState: () => IState) => {
    const {
        params: { query },
    } = getState();
    dispatch(
        apiAction({
            url: API.endpoints.USERS,
            method: EMethods.GET,
            onSuccess: ({ items }) => (dispatch: any) => {
                dispatch(fetchUsersDetails(items));
            },
            data: {
                q: query,
            },
            label: FETCH_USERS,
        }),
    );
};

export const fetchUsersDetails = (items: IUser[]) => (dispatch: Dispatch, getState: () => IState): void => {
    const {
        params: { query },
    } = getState();
    const requests: INetworkRequest[] = [];
    items.forEach((item: IUser) => {
        requests.push({
            url: item.url,
            method: EMethods.GET,
            data: {},
            isAbsoluteUrl: true,
        });
    });
    dispatch(
        apiMultiAction({
            requests,
            label: FETCH_USERS_DETAILS,
            onSuccess: (responses) => ({
                type: SET_USERS_DETAILS,
                payload: {
                    query,
                    items,
                    data: responses,
                },
            }),
            onFinally: () => (dispatch: Dispatch) => {
                dispatch(apiEnd(FETCH_USERS_DETAILS));
            },
        }),
    );
};
