import { API_START, API_END, API_ERROR, API_CLEAR } from '../types';
import { IAction } from '../store.interface';

// initial load
export const apiStart = (label: string): IAction => ({
    type: API_START,
    payload: label,
});

// api fetch has been succeed
export const apiEnd = (label: string): IAction => ({
    type: API_END,
    payload: label,
});

// api fetch returned error
export const apiError = (error: string, label: string): IAction => ({
    type: API_ERROR,
    payload: {
        label,
        error,
    },
});

// to clear the api info
export const clearApi = (label: string): IAction => ({
    type: API_CLEAR,
    payload: label,
});
