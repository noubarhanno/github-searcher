import { FETCH_REPOS, SET_REPOS } from './repos.types';
import { Dispatch } from 'redux';
import { IState, EMethods } from 'store/store.interface';
import { apiAction } from 'store/middleware/api.middleware.helper';
import API from 'config/api.constants';
import { apiEnd } from 'store/actions/api.actions';

export const fetchRepos = () => (dispatch: Dispatch, getState: () => IState) => {
    const {
        params: { query },
    } = getState();
    dispatch(
        apiAction({
            url: API.endpoints.REPOS,
            method: EMethods.GET,
            onSuccess: ({ items }) => ({
                type: SET_REPOS,
                payload: {
                    query,
                    data: items,
                },
            }),
            data: {
                q: query,
            },
            label: FETCH_REPOS,
            onFinally: () => (dispatch: Dispatch) => {
                dispatch(apiEnd(FETCH_REPOS));
            },
        }),
    );
};
