import React, { FC } from 'react';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import { InputComponentProps } from './type';
import { Label, Wrapper } from './style';


const InputComponent: FC<InputComponentProps> = (props) => {
    const { label, control, name, rules, placeholder, error, ...args } = props;
    const isRequired = rules?.required ? true : false;
    return (
        <Wrapper>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <>
                        <Label htmlFor={name}>{isRequired && <span style={{ color: 'red' }}>* </span>}{label} </Label>
                        <Input
                            {...args}
                            {...field}
                            id={name}

                            placeholder={placeholder}
                            style={{
                                borderColor: error ? 'red' : '',
                                width: '100%',
                            }}
                        />
                    </>
                )}
            />
            {error && <p style={{ color: 'red' }}>{error?.message}</p>}
        </Wrapper>
    );
};

export default InputComponent;