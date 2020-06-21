import { API_END, API_START, API_ERROR, API_CLEAR } from '../types';
import { IAction } from '../store.interface';
export interface IAPiState {
    isLoading?: boolean;
    error?: {};
    label?: string;
}

export default (state: IAPiState = {}, action: IAction) => {
    switch (action.type) {
        case API_END:
            return {
                ...state,
                label: action.payload,
                isLoading: false,
            };
        case API_START:
            return {
                ...state,
                label: action.payload,
                isLoading: true,
                error: null,
            };
        case API_ERROR:
            return {
                ...state,
                isLoading: false,
                ...action.payload,
            };
        case API_CLEAR:
            return {
                ...state,
                isLoading: false,
                error: null,
                label: null,
            };
        default:
            return state;
    }
};
