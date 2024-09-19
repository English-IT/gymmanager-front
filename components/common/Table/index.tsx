import React from 'react';
import { Table, Button, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ColumnSearch from './ColumnSearch';
import { SearchOutlined } from '@ant-design/icons';
import { GymTableProps } from './types';

const UserTable = <T extends { name?: string }>({
    columns,
    data,
    loading = false,
    pagination = { pageSize: 10 },
    rowKey = 'id',
    onEdit,
    onDelete,
}: GymTableProps<T>) => {

    const getColumnSearchProps = (dataIndex: keyof T) => ({
        filterDropdown: (props: any) => (
            <ColumnSearch
                dataIndex={String(dataIndex)}
                setSelectedKeys={props.setSelectedKeys}
                selectedKeys={props.selectedKeys}
                confirm={props.confirm}
                clearFilters={props.clearFilters}
            />
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value: string, record: T) =>
            record[dataIndex]
                ? String(record[dataIndex]).toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownOpenChange: (visible: boolean) => {
            if (visible) {
                setTimeout(() => {
                    const input = document.querySelector('input.ant-input') as HTMLInputElement;
                    if (input) input.focus();
                }, 100);
            }
        },
    });

    const enhancedColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
        },
        ...columns,
        {
            title: 'Actions',
            key: 'actions',
            render: (text: any, record: T) => (
                <Space size="middle">
                    <Button onClick={() => onEdit && onEdit(record)} type="primary">
                        Edit
                    </Button>
                    <Button onClick={() => onDelete && onDelete(record)} danger>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <Table
            columns={enhancedColumns as ColumnsType<T>}
            dataSource={data}
            loading={loading}
            pagination={pagination}
            rowKey={rowKey}
            scroll={{ x: 'max-content' }}
        />
    );
};

export default UserTable;
