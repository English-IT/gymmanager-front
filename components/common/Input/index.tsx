import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Input } from 'antd';
import { InputComponentProps } from './type';
import { Label, Wrapper } from './style';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const InputComponent: FC<InputComponentProps> = (props) => {

    const { label, control, name, rules, placeholder, type, error, ...args } = props;
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
                        {type === "password"
                            ?
                            <Input.Password
                                {...args}
                                {...field}
                                id={name}
                                placeholder={placeholder}
                                style={{
                                    borderColor: error ? 'red' : "unset",
                                    width: "100%"
                                }}
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                            :
                            <Input
                                {...args}
                                {...field}
                                id={name}
                                placeholder={placeholder}
                                style={{
                                    borderColor: error ? 'red' : "unset",
                                    width: "100%"
                                }}
                            />}

                    </>
                )}
            />
            {error && <p style={{ color: 'red' }}>{error?.message}</p>}
        </Wrapper>
    );
};

export default InputComponent;