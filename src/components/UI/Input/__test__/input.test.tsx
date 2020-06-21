import React from 'react';
import { render } from 'utils/test';
import Input from '../Input';

const spyFn: any = jest.fn();
describe('Input test suite', () => {
    test('Snapshot', () => {
        const { container } = render(<Input onChangeHandler={spyFn} label="test" value="test" />);
        expect(container).toMatchSnapshot();
    });

    test('should render the label as placeholder', () => {
        const { getByTestId } = render(<Input onChangeHandler={spyFn} label="test" value="test" />);
        const wrapper = getByTestId('input-styled');
        expect(wrapper).toHaveAttribute('placeholder', 'test');
    });
});
