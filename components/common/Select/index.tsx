import React, { FC } from 'react';
import { Select } from 'antd';
import { Controller } from 'react-hook-form';
import { SelectWrapper } from './style';
import { Label } from '../Input/style';
import { SelectComponentProps } from './type';

const SelectComponent: FC<SelectComponentProps> = (props) => {

    const { customStyles, label, name, control, placeholder, options, allowClear, onChange, ...args } = props;

    return (
        <SelectWrapper style={customStyles}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <>
                        <Label style={{ marginRight: "15px" }}>{label}</Label>
                        < Select
                            {...args}
                            {...field}
                            allowClear
                            placeholder={placeholder}
                            style={{ width: 160 }}
                            options={options}
                            onChange={onChange}
                            value={field.value}
                        />
                    </>
                )}
            />
        </SelectWrapper>
    );
};

export default SelectComponent;
;