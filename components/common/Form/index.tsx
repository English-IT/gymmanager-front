import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Select } from 'antd';
import { Input, Button } from 'components';
import { Label } from '../Input/style';
import { Container, SelectWrapper } from './style';

interface FormData {
    username: string;
    email: string;
    membership: { label: string; value: string }
    status: { label: string; value: boolean }
}

const UserForm: React.FC = () => {
    const { Option } = Select;
    const [membershipType, setMembershipType] = useState("standard");
    const [statusType, setStatusType] = useState("active");
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("onSubmit")
        console.log(errors);
        console.log('Form Data: ', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input control={control} error={errors.username} rules={{ required: 'Username is required' }} label='Username' name='username' />
            <Input control={control} type='number' label='Phone number' name='phone_number' />
            <Input control={control} type='number' label='Age' name='age' />
            <Container>
                <SelectWrapper>
                    <Controller
                        name="membership"
                        control={control}
                        render={({ field }) => (
                            <>
                                <Label style={{ marginRight: "15px" }}>Membership type</Label>
                                <Select
                                    placeholder="Filter"
                                    onChange={(value) => setMembershipType(value)}
                                    style={{ width: 160 }}
                                    value={membershipType}
                                >
                                    <Option value="standard">standard</Option>
                                    <Option value="premium">premium</Option>
                                </Select>
                            </>
                        )}
                    />
                </SelectWrapper>
                <SelectWrapper>
                    <Controller
                        name="status"
                        control={control}
                        render={({ field }) => (
                            <>
                                <Label style={{ marginRight: "15px" }}>Status</Label>
                                <Select
                                    placeholder="Filter"
                                    onChange={(value) => setStatusType(value)}
                                    style={{ width: 160 }}
                                    value={statusType}
                                >
                                    <Option value="Active">active</Option>
                                    <Option value="Inactive">inactive</Option>
                                </Select>
                            </>
                        )}
                    />
                </SelectWrapper>
            </Container>
            <Button label='Submit' type="primary" style={{ width: "100%", marginBottom: "10px" }} size='large' />
        </form>
    );
};

export default UserForm;
