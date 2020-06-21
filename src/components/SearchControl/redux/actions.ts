import { SET_ENTITY, SET_QUERY } from './types';
import { IAction, ESearchEntity } from 'store/store.interface';

export const setEntity = (entity: ESearchEntity): IAction => ({
    type: SET_ENTITY,
    payload: entity,
});

export const setQuery = (query: string): IAction => ({
    type: SET_QUERY,
    payload: query,
});
