import { SET_ENTITY, SET_QUERY } from './types';
import { ESearchEntity, IAction } from 'store/store.interface';

export type TSearch = {
    entity: ESearchEntity;
    query: string;
};

const INITIAL_STATE = {
    entity: ESearchEntity.USERS,
    query: '',
};

export default (state: TSearch = INITIAL_STATE, action: IAction) => {
    const { type, payload } = action;
    switch (type) {
        case SET_ENTITY:
            return {
                ...state,
                entity: payload,
            };
        case SET_QUERY:
            return {
                ...state,
                query: payload,
            };
        default:
            return state;
    }
};
