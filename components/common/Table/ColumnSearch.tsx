import React, { useRef } from 'react';
import { Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd/es/input';

interface ColumnSearchProps {
    dataIndex: string;
    setSelectedKeys: (keys: string[]) => void;
    selectedKeys: string[];
    confirm: () => void;
    clearFilters: () => void;
}

const ColumnSearch: React.FC<ColumnSearchProps> = ({
    dataIndex,
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
}) => {
    const searchInputRef = useRef<InputRef | null>(null);

    const handleSearch = () => {
        confirm();
        setSelectedKeys(selectedKeys[0] ? [selectedKeys[0]] : []);
    };

    const handleReset = () => {
        clearFilters();
        setSelectedKeys([]);
    };

    return (
        <div style={{ padding: 8 }}>
            <Input
                ref={searchInputRef}
                placeholder={`Search ${dataIndex}`}
                value={selectedKeys[0]}
                onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={handleSearch}
                style={{ marginBottom: 8, display: 'block' }}
            />
            <Space>
                <Button
                    type="primary"
                    onClick={handleSearch}
                    icon={<SearchOutlined />}
                    size="small"
                    style={{ width: 90 }}
                >
                    Search
                </Button>
                <Button onClick={handleReset} size="small" style={{ width: 90 }}>
                    Reset
                </Button>
            </Space>
        </div>
    );
};

export default ColumnSearch;
