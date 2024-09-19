import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from 'components';
import { useRegisterUser } from 'api';
import { FormData } from './type';
import { StyledForm } from './style';

const ManagerForm: React.FC = () => {

    const { control, handleSubmit, formState: { errors }, getValues, reset } = useForm<FormData>();
    const { mutate: registerUser } = useRegisterUser();

    const onSubmit = (data: FormData) => {
        const { confirm_password, ...newUser } = data;
        const userWithRole = { ...newUser, role: 'USER' };
        registerUser(userWithRole);
        reset()
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input control={control} error={errors.name} rules={{ required: 'Name is required' }} label='Name' name='name' />
                <Input control={control} type='email' label='Email' name='email' rules={{
                    required: 'Email is required',
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address',
                    },
                }}
                    error={errors.email} />
                <Input control={control} type='number' label='Phone number' name='phone' error={errors.phone} rules={{ required: 'Phone number is required' }} />
                <Input control={control} type='password' label='Password' name='password' error={errors.password} rules={{ required: 'Password is required' }} />
                <Input control={control} type='password' label='Confirm Password' name='confirm_password' error={errors.confirm_password}
                    rules={{
                        required: 'Please confirm your password',
                        validate: value =>
                            value === getValues('password') || 'Passwords do not match',
                    }} />
            </div>
            <Button label='Submit' style={{ width: "100%", marginBottom: "10px" }} size='large' onClick={handleSubmit(onSubmit)} />
        </StyledForm>
    );
};

export default ManagerForm;
