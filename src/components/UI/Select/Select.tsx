import React, { useState, useEffect, FunctionComponent, useRef } from 'react';
import { SelectWrapper, SelectBox, SelectOptions, SelectOption, SelectBoxLabel } from './Select.style';
import { TOption, TSelect } from './Select.interface';
import useOnClickOutside from '../../../hooks/useOnCickOutside';
import { useTransition } from 'react-spring';
import { ArrowDown, ArrowUp } from '../../Icons';
import Theme from '../../../theme';

const Select: FunctionComponent<TSelect> = (props) => {
    /**
     * Props
     */
    const { id, onChange, value, options: selectOptions, testid, ...rest } = props;

    /**
     * use Ref
     */
    const ref = useRef(null);

    /**
     * State
     */
    const [options, setOptions] = useState(selectOptions);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<TOption | undefined>();

    useEffect(() => {
        setOptions(options);
    }, [options]);

    /**
     * check the value passed if exist and set it as selected
     */
    useEffect(() => {
        if (value !== null) {
            const filteredOption = options.filter((option: TOption) => option.value === value);
            if (filteredOption) {
                setSelected(filteredOption[0]);
            } else {
                setSelected(options[0]);
            }
        }
    }, [value, options]);

    /**
     * Handles & Interactions
     */
    useOnClickOutside(ref, () => setOpen(false));

    const onOpenSelectHandle = () => {
        setOpen(!open);
    };

    const onSelectOptionHandle = (option: TOption) => () => {
        setSelected(option);
        setOpen(!open);
        onChange(option);
    };

    /**
     * Animation transitions using react-spring to animate the options list
     */
    const transitions = useTransition(open, null, {
        from: { opacity: 0, transform: 'translateY(-15%)' },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: { opacity: 0, transform: 'translateY(5%)' },
    });

    const {
        colors: { text },
    } = Theme;

    const iconsSize = { height: '12px', color: text.dark };

    return (
        <SelectWrapper id={id} ref={ref} {...rest} data-testid={testid}>
            {/* Select Label Box */}
            <SelectBox data-testid="select-box" open={open} onClick={onOpenSelectHandle}>
                {selected && <SelectBoxLabel>{selected.label}</SelectBoxLabel>}

                {open ? <ArrowUp style={iconsSize} /> : <ArrowDown style={iconsSize} />}
            </SelectBox>

            {/* Select Options */}
            {transitions.map((spring: any) => {
                return (
                    spring.item && (
                        <SelectOptions open={open} style={spring.props} key={spring.key}>
                            {options.map((option: TOption) => (
                                <SelectOption
                                    data-testid="__selection_options_value__"
                                    selected={selected === option}
                                    key={option.id}
                                    onClick={onSelectOptionHandle(option)}
                                >
                                    {option.label}
                                </SelectOption>
                            ))}
                        </SelectOptions>
                    )
                );
            })}
        </SelectWrapper>
    );
};

Select.defaultProps = {
    m: 1,
};

export default Select;
