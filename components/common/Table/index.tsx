import React from 'react';
import { Table, Button, Space } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface GymTableProps<T> {
    columns: ColumnsType<T>;
    data: T[];
    loading?: boolean;
    pagination?: TableProps<T>['pagination'];
    rowKey?: string;
    onEdit?: (record: T) => void;
    onDelete?: (record: T) => void;
}

const GymTable = <T extends object>({
    columns,
    data,
    loading = false,
    pagination = { pageSize: 10 },
    rowKey = 'id',
    onEdit,
    onDelete,
}: GymTableProps<T>) => {
    const actionColumn = {
        title: 'Actions',
        key: 'actions',
        render: (text: any, record: T) => (
            <Space size="middle">
                <Button onClick={() => onEdit && onEdit(record)} type="primary">
                    Edit
                </Button>
                <Button onClick={() => onDelete && onDelete(record)}>
                    Delete
                </Button>
            </Space>
        ),
    };

    return (
        <Table
            columns={[...columns, actionColumn]}
            dataSource={data}
            loading={loading}
            pagination={pagination}
            rowKey={rowKey}
        />
    );
};

export default GymTable;
