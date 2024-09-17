import React from 'react';
import { Button, Drawer, Space } from 'antd';
import { UserForm } from "components"
import { DrawerComponentProps } from './type';

const DrawerComponent: React.FC<DrawerComponentProps> = ({ open, setOpen, title }) => {

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
                <UserForm />
            </Drawer>
        </>
    );
};

export default DrawerComponent;