import React, { FunctionComponent, useEffect } from 'react';
import SearchControl from '../../components/SearchControl';
import { Flex } from 'reflexbox';
import { fetchRepos } from './redux/repos.actions';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from 'store/store.interface';
import debounce from 'utils/debounce';
import Loader from './Loader/Loader';
import { withRouter } from 'react-router-dom';
import RepoCard from 'components/RepoCard';
const Repos: FunctionComponent<any> = ({ history }) => {
    const dispatch: any = useDispatch();
    const { query, entity, error, isLoading } = useSelector((state: IState) => ({
        ...state.params,
        ...state.api,
    }));
    const { terms } = useSelector((state: IState) => state.repositories);
    useEffect(() => {
        if (query && query.length >= 3) {
            debounce(() => {
                if (!terms || !terms[query]) {
                    dispatch(fetchRepos());
                }
            }, 500)();
        } else {
            history.push('/');
        }
    }, [query, entity, terms, dispatch, history]);

    return (
        <Flex flexDirection="column" alignItems="flex-start" flex="1">
            <SearchControl error={error} />
            {isLoading && !error ? <Loader /> : terms && terms[query] ? <RepoCard userData={terms[query]} /> : ''}
        </Flex>
    );
};

export default withRouter(Repos);
