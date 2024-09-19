import React from 'react';
import { useForm } from 'react-hook-form';
import { Select } from "components";
import { Input, Button } from 'components';
import { Container, StyledForm } from './style';
import { FormData } from './type';

const UserForm: React.FC = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log('Form Data: ', data);
    };

    const membershipOptions = [
        { label: 'standard', value: 'standard' },
        { label: 'premium', value: 'premium' },
    ];

    const statusOptions = [
        { label: "active", value: "active" },
        { label: "inactive", value: "inactive" }
    ]

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input control={control} error={errors.username} rules={{ required: 'Username is required' }} label='Username' name='username' />
                <Input control={control} type='number' label='Phone number' name='phone_number' />
                <Input control={control} type='number' label='Age' name='age' />
                <Container>
                    <Select name='membership_type' label="Membership type" control={control} options={membershipOptions} placeholder="standard" customStyles={{ gap: "10px" }} />
                    <Select name="status" label="Status" control={control} options={statusOptions} placeholder="active" customStyles={{ gap: "10px" }} />
                </Container>
            </div>
            <Button label='Submit' style={{ width: "100%", marginBottom: "10px" }} size='large' onClick={handleSubmit(onSubmit)} />
        </StyledForm>
    );
};

export default UserForm;
