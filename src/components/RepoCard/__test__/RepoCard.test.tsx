import React from 'react';
import { render } from 'utils/test';
import RepoCards from '../RepoCards';
import mockStore from './__mocks__';
import ThemeProvider from '../../themeProvider';

describe('repo card test suite', () => {
    it('should match the snapshot', () => {
        const wrapper = render(
            <ThemeProvider>
                <RepoCards userData={mockStore.userData} />
            </ThemeProvider>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('should show 3 cards', () => {
        const { getAllByTestId } = render(
            <ThemeProvider>
                <RepoCards userData={mockStore.userData} />
            </ThemeProvider>,
        );
        const cards = getAllByTestId('repo-card');
        expect(cards.length).toEqual(3);
    });
    it('should show 2 cards with badge and one without ', () => {
        const { getAllByTestId } = render(
            <ThemeProvider>
                <RepoCards userData={mockStore.userData} />
            </ThemeProvider>,
        );
        const cards = getAllByTestId('language-badge');
        expect(cards.length).toEqual(2);
    });
});
