import React, { FC } from 'react';
import { Input, InputProps, Typography } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { InputComponentProps } from './type';
import { Label, Wrapper } from './style';


const InputComponent: FC<InputComponentProps & InputProps> = (props) => {
    const { label, control, name, rules, placeholder, error, ...args } = props;
    const { register } = useForm()
    return (
        <Wrapper>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <>
                        <Label htmlFor={name}>{label}</Label>
                        <Input {...args} {...field} {...register(name)} id={name} placeholder={placeholder} />
                    </>
                )}
            />
            {error && <p style={{ color: 'red' }}>{error?.message}</p>}
        </Wrapper>
    );
};

export default InputComponent;