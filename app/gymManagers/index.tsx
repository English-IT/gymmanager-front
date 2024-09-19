import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import dayjs from "dayjs";
import { message } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { PlusOutlined } from '@ant-design/icons';
import { Drawer, Select, Table } from 'components';
import Loader from '../Loader';
import { useUsers } from '../../api';
import ManagerForm from './ManagerForm';
import { User } from './type';
import { AddMemberBtn, FilterDropdownWrapper, UsersPageTopSection } from './style';

const GymManagers = () => {

    const { data, isLoading } = useUsers({});
    const [managers, setManagers] = useState<User[]>([]);
    const [filteredData, setFilteredData] = useState<User[]>([]);
    const [filterValue, setFilterValue] = useState<string | undefined>(undefined);
    const [open, setOpen] = useState<boolean>(false);
    const { control } = useForm()

    useEffect(() => {
        if (data) {
            setManagers(data);
        }
    }, [data]);

    const filterFields = [
        { label: 'standard', value: 'standard' },
        { label: 'premium', value: 'premium' },
    ]

    const columns: ColumnsType<User> = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Created Time',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (createdAt: string) => dayjs(createdAt).format('DD/MM/YYYY HH:mm'),
        },
        {
            title: 'Updated Time',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
            render: (updatedAt: string) => dayjs(updatedAt).format('DD/MM/YYYY HH:mm'),

        },
    ];


    const handleEdit = (user: User) => {
        message.info(`Edit user: ${user.name}`);
    };

    const handleDelete = (user: User) => {
        const updatedMembers = managers.filter((m) => m.id !== user.id);
        setManagers(updatedMembers);
        message.success(`Deleted user: ${user.name}`);
    };

    const handleFilterChange = (value: string) => {
        setFilterValue(value);
        const filtered = managers.filter((user) => {
            return user.phone === value;
        });
        setFilteredData(filtered);
    };

    if (isLoading) return <Loader />;

    return (
        <>
            <UsersPageTopSection>
                <h1>Gym Managers</h1>
                <Drawer title="Add new manager" open={open} setOpen={setOpen} children={<ManagerForm />} />
                <FilterDropdownWrapper>
                    {/* <Select name='filter' control={control} placeholder="Filter" allowClear={true} options={filterFields} onChange={handleFilterChange} /> */}
                    <AddMemberBtn onClick={() => setOpen(true)}>
                        <PlusOutlined style={{ marginRight: "8px" }} />
                        Add manager
                    </AddMemberBtn>
                </FilterDropdownWrapper>
            </UsersPageTopSection>
            <Table<User>
                columns={columns}
                data={filterValue ? filteredData : managers}
                onEdit={handleEdit}
                onDelete={handleDelete}
                rowKey="id"
            />
        </>
    )
}

export default GymManagers