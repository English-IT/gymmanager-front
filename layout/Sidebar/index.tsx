import { Menu, MenuProps, Button, Layout } from 'antd';
import { DashboardOutlined, UserOutlined, SettingOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { ButtonWrapper, Container, Logo, LogoWrapper, StyledSider } from './style';
import Link from 'next/link';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setCollapsed(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const items: MenuItem[] = [
        {
            key: '1',
            icon: <DashboardOutlined />,
            label: (
                <Link href="/">
                    Dashboard
                </Link>
            ),
        },
        {
            key: '2',
            icon: <UserOutlined />,
            label: (
                <Link href="/users">
                    Users
                </Link>
            ),
        },
        {
            key: '3',
            icon: <SettingOutlined />,
            label: (
                <Link href="/settings">
                    Settings
                </Link>
            ),
        },
    ];

    return (
        <Container>
            <StyledSider
                collapsible
                collapsed={collapsed}
                onCollapse={setCollapsed}
                collapsedWidth={80}
                breakpoint="md"
                trigger={null}
            >
                <LogoWrapper>
                    <Logo>Logo</Logo>
                </LogoWrapper>

                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />

                <ButtonWrapper>
                    <Button
                        onClick={() => setCollapsed(!collapsed)}
                        icon={collapsed ? <MenuUnfoldOutlined style={{ color: "white" }} /> : <MenuFoldOutlined style={{ color: "white" }} />}
                        style={{ border: 'none', width: "100%", backgroundColor: "#002140" }}
                    />
                </ButtonWrapper>
            </StyledSider>
        </Container>
    );
};

export default Sidebar;
