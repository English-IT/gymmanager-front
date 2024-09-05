import { Menu, MenuProps } from 'antd';
import { DashboardOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Logo, LogoWrapper, StyledSider } from './style';


type MenuItem = Required<MenuProps>['items'][number];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const items: MenuItem[] = [
        { key: '1', icon: <DashboardOutlined />, label: 'Dashboard' },
        { key: '2', icon: <UserOutlined />, label: 'Users' },
        { key: '3', icon: <SettingOutlined />, label: 'Settings' },
    ];

    return (
        <StyledSider
            collapsible
            collapsed={collapsed}
            onCollapse={(collapse) => setCollapsed(collapse)}
        >
            <LogoWrapper>
                <Logo>Logo</Logo>
            </LogoWrapper>

            <Menu theme='dark' mode="inline" defaultSelectedKeys={['1']} items={items} />
        </StyledSider>
    );
};



export default Sidebar;