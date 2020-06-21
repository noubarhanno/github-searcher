import React, { FunctionComponent, useEffect } from 'react';
import SearchControl from '../../components/SearchControl';
import { Flex } from 'reflexbox';
import { fetchUsers } from './redux/users.actions';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from 'store/store.interface';
import debounce from 'utils/debounce';
import Loader from './Loader/Loader';
import { withRouter } from 'react-router-dom';
import UserCards from 'components/UserCards';
const Users: FunctionComponent<any> = ({ history }) => {
    const dispatch: any = useDispatch();
    const { query, entity, isLoading, error, terms } = useSelector((state: IState) => ({
        ...state.params,
        ...state.api,
        ...state.users,
    }));

    useEffect(() => {
        if (query && query.length >= 3) {
            debounce(() => {
                if (!terms || !terms[query]) {
                    dispatch(fetchUsers());
                }
            }, 500)();
        } else {
            history.push('/');
        }
    }, [query, entity, history, dispatch, terms]);

    return (
        <Flex flexDirection="column" alignItems="flex-start" flex="1">
            <SearchControl error={error} />
            {isLoading && !error ? <Loader /> : terms && terms[query] ? <UserCards userData={terms[query]} /> : ''}
        </Flex>
    );
};

export default withRouter(Users);
