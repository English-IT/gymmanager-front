import React from 'react';
import { Button, Drawer, Space } from 'antd';
import { DrawerComponentProps } from './type';

const DrawerComponent: React.FC<DrawerComponentProps> = ({ open, setOpen, title, children }) => {

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Drawer
                title={title}
                width={550}
                onClose={onClose}
                maskClosable={false}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                    </Space>
                }
            >
                {children}
            </Drawer>
        </>
    );
};

export default DrawerComponent;