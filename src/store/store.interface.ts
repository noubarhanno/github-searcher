import { IAPiState } from './reducers/api.reducers';
import { TSearch } from 'components/SearchControl/redux/reducers';
import { IUsers } from 'pages/Users/redux/users.interface';
export enum EMethods {
    /**
     * add more methods
     */
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
}

export interface IAction<T = any> {
    type: string;
    payload?: T;
}

export type IApiMiddlewareAction = {
    type: string;
    payload: IPayload;
};

export type IApiMiddlewareMultiAction = {
    type: string;
    payload: IMultiRequestPayload;
};

export enum ESearchEntity {
    USERS = 'users',
    REPOS = 'repositories',
}

export type INetworkRequest = {
    headers?: object; // Override headers
    method: EMethods;
    url: string;
    data: object;
    isAbsoluteUrl?: boolean;
};

export type IPayload = INetworkRequest & {
    label: string; // Module/feature specific label
    onSuccess: (data: any) => void;
    onFailure?: (...args: any[]) => IAction;
    onFinally?: () => void;
};

export type IMultiRequestPayload = {
    label: string; // Module/feature specific label
    onSuccess: (data: any) => void;
    onFailure?: (...args: any[]) => IAction;
    onFinally?: () => void;
    requests?: INetworkRequest[];
};

export interface IState {
    api: IAPiState;
    params: TSearch;
    users: IUsers;
    repositories: any;
}
