import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Menu, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { ButtonWrapper, Container, Logo, LogoWrapper, StyledSider } from './style';
import { managerItems, adminItems } from './menuItems';

const Sidebar: React.FC = () => {
    const { data: session } = useSession();
    const [collapsed, setCollapsed] = useState<boolean>(false);

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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={session?.user.role === 'SUPER_ADMIN' ? adminItems : managerItems} />
                <ButtonWrapper>
                    <Button
                        onClick={() => setCollapsed(!collapsed)}
                        icon={collapsed ? <MenuUnfoldOutlined style={{ color: 'white' }} /> : <MenuFoldOutlined style={{ color: 'white' }} />}
                        style={{ border: 'none', width: '100%', backgroundColor: '#002140' }}
                    />
                </ButtonWrapper>
            </StyledSider>
        </Container>
    );
};

export default Sidebar;
