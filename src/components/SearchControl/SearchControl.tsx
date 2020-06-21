import React, { FunctionComponent, ChangeEvent, useEffect } from 'react';
import { Input, Select } from '../UI';
import { Flex } from 'reflexbox';
import { Title, SubTitle, Error } from './SearchControl.style';
import { AppIcon } from '../Icons';
import { TOption } from 'components/UI/Select/Select.interface';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ESearchEntity, IState } from 'store/store.interface';
import { setEntity, setQuery } from './redux/actions';
import { withRouter, useHistory } from 'react-router-dom';
import debounce from 'utils/debounce';

const SearchControl: FunctionComponent<any> = ({ error }) => {
    /**
     * set hardcoded options for the search entities
     */
    const entities: TOption[] = [
        { id: 1, label: 'Users', value: 'users' as ESearchEntity },
        { id: 2, label: 'Repositories', value: 'repositories' as ESearchEntity },
    ];

    const history = useHistory();
    const { query, entity } = useSelector((state: IState) => state.params);

    const dispatch: Dispatch = useDispatch();

    const onChangeHandle = (selectedOption: TOption) => {
        dispatch(setEntity(selectedOption.value));
        /**
         * workarround to force navigation after changing the entity
         */
        if (query && query.length >= 3) {
            if (selectedOption.value === 'users') {
                history.push('/users');
            } else if (selectedOption.value === 'repositories') {
                history.push('/repositories');
            }
        }
    };

    const onQueryChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setQuery(e.target.value));
    };

    /**
     * effect to push the user to users and repositories pages
     * as per the entity and the query length
     */
    useEffect(() => {
        if (query.length >= 3) {
            if (entity === 'users') {
                debounce(() => history.push('/users'), 500)();
            } else if (entity === 'repositories') {
                debounce(() => history.push('/repositories'), 500)();
            }
        }
    }, [entity, query, history]);

    return (
        <Flex flexDirection="column">
            <Flex flexDirection="row" marginBottom="15px">
                <AppIcon style={{ width: '40px', height: '40px' }} />
                <Flex flexDirection="column" marginLeft="15px">
                    <Title>GitHub Searcher</Title>
                    <SubTitle>Search for users or repositories</SubTitle>
                </Flex>
            </Flex>
            <Flex flexDirection="row">
                <Input
                    label="Start typing to search ..."
                    onChangeHandler={onQueryChangeHandler}
                    width="300px"
                    value={query}
                />
                <Select width="150px" options={entities} onChange={onChangeHandle} value={entity} />
            </Flex>
            {error && <Error>{error}</Error>}
        </Flex>
    );
};

export default withRouter(SearchControl);
