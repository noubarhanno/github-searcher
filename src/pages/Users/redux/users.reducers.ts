import { IAction } from 'store/store.interface';
import { IUsers, IUser } from './users.interface';
import { SET_USERS_DETAILS } from './users.types';

export default (state: IUsers = {}, action: IAction) => {
    switch (action.type) {
        case SET_USERS_DETAILS:
            const { items } = action.payload;
            const trnasformedData = action.payload.data.map((response: any) => {
                const { data } = response;
                if (items) {
                    const oldData = items.filter((item: IUser) => item.login === data.login);
                    if (oldData.length > 0) {
                        const newData = { ...oldData[0], details: data };
                        return {
                            ...newData,
                        };
                    } else {
                        return {
                            ...oldData,
                        };
                    }
                }
                return null;
            });
            return {
                ...state,
                terms: {
                    ...state.terms,
                    [action.payload.query]: trnasformedData,
                },
            };
        default:
            return state;
    }
};
