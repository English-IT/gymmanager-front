import React, { useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import { Table } from '../../components';
import { message } from 'antd';

interface Member {
    id: number;
    name: string;
    age: number;
    membershipStatus: string;
}

const MembersPage = () => {
    const [members, setMembers] = useState<Member[]>([
        { id: 1, name: 'John Doe', age: 25, membershipStatus: 'Active' },
        { id: 2, name: 'Jane Smith', age: 30, membershipStatus: 'Inactive' },
        { id: 3, name: 'Michael Johnson', age: 27, membershipStatus: 'Active' },
    ]);

    const columns: ColumnsType<Member> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Membership Status',
            dataIndex: 'membershipStatus',
            key: 'membershipStatus',
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

    return (
        <div>
            <h1>Gym Members</h1>
            <Table<Member>
                columns={columns}
                data={members}
                onEdit={handleEdit}
                onDelete={handleDelete}
                rowKey="id"
            />
        </div>
    );
};

export default MembersPage;
