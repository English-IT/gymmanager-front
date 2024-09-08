import React, { useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import { Button, Table } from '../../components';
import { Select, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { AddMemberBtn, FilterDropdownWrapper, MembersPageTopSection } from './style';
import { useRouter } from 'next/router';

interface Member {
    id: number;
    name: string;
    phone_number: string;
    age: number;
    status: string;
    membershipType: string;
}

const { Option } = Select;

const MembersPage = () => {

    const [members, setMembers] = useState<Member[]>([
        { id: 1, name: 'John Doe', phone_number: "+998944131514", age: 25, membershipType: "premium", status: 'active' },
        { id: 2, name: 'Jane Smith', phone_number: "+998944131514", age: 30, membershipType: "premium", status: 'nactive' },
        { id: 3, name: 'Michael Johnson', phone_number: "+998944131514", age: 27, membershipType: "standard", status: 'active' },
    ]);

    const [filteredData, setFilteredData] = useState<Member[]>(members);
    const [filterValue, setFilterValue] = useState<string | undefined>(undefined);
    const router = useRouter()

    const columns: ColumnsType<Member> = [
        {
            title: 'Phone Number',
            dataIndex: 'phone_number',
            key: 'phone_number',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Membership',
            dataIndex: 'membershipType',
            key: 'membershipType',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    const handleEdit = (member: Member) => {
        message.info(`Edit member: ${member.name}`);
        // Here, you can navigate to an edit page or open a modal to edit member details.
    };

    const handleDelete = (member: Member) => {
        const updatedMembers = members.filter((m) => m.id !== member.id);
        setMembers(updatedMembers);
        message.success(`Deleted member: ${member.name}`);
    };

    const handleFilterChange = (value: string) => {
        setFilterValue(value);
        const filtered = members.filter((member) => {
            return member.membershipType === value || member.status === value;
        });
        setFilteredData(filtered);
    };

    return (
        <div>
            <MembersPageTopSection>
                <h1>Gym Members</h1>
                <FilterDropdownWrapper>
                    <Select
                        placeholder="Filter"
                        onChange={handleFilterChange}
                        style={{ width: 120 }}
                        allowClear
                        value={filterValue}
                    >
                        <Option value="standard">standard</Option>
                        <Option value="premium">premium</Option>
                        <Option value="active">active</Option>
                        <Option value="nactive">nactive</Option>
                    </Select>
                    <AddMemberBtn onClick={() => router.push("/add-user")}>
                        <PlusOutlined style={{ marginRight: "8px" }} />
                        Add member
                    </AddMemberBtn>
                </FilterDropdownWrapper>
            </MembersPageTopSection>
            <Table<Member>
                columns={columns}
                data={filterValue ? filteredData : members}
                onEdit={handleEdit}
                onDelete={handleDelete}
                rowKey="id"
            />
        </div>
    );
};

export default MembersPage;
