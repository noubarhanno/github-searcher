import { IAction } from 'store/store.interface';
import { IRepos } from './repos.interface';
import { SET_REPOS } from './repos.types';

export default (state: IRepos = {}, action: IAction) => {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                terms: {
                    ...state.terms,
                    [action.payload.query]: action.payload.data,
                },
            };
        default:
            return state;
    }
};
