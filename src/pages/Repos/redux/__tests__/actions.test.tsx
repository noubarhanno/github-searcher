import { getMockStore } from 'utils/test';
import mockStore from '../__mocks__/store.json';

const store = getMockStore();

describe('Repos actions test suite', () => {
    beforeEach(() => {
        store.clearActions();
    });
    it('should return the correct payload when passing items from repos API', async () => {
        await store.dispatch<any>({
            type: 'SET_REPOS',
            payload: {
                params: 'noubar',
                data: mockStore,
            },
        });
        expect(store.getActions()[0]).toMatchObject({
            type: 'SET_REPOS',
            payload: { data: mockStore, params: 'noubar' },
        });
    });
});
