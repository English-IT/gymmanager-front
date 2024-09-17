import { signOut } from 'next-auth/react';
import { Avatar, Dropdown } from 'antd';
import { StyledHeader, Title } from './style';

const Navbar = () => {

    const handleSignOut = () => {
        signOut({
            callbackUrl: "/login",
        });
    };

    const userMenu = [
        {
            key: "1",
            label: "Profile"
        },
        {
            key: "2",
            label: "Logout",
            onClick: (() => handleSignOut())
        }
    ]

    return (
        <StyledHeader style={{ backgroundColor: '#f0f2f5' }}>
            <Title>My Dashboard</Title>
            <Dropdown menu={{ items: userMenu }} placement="bottomRight">
                <Avatar size="large" style={{ cursor: 'pointer', backgroundColor: '#1890ff' }} />
            </Dropdown>
        </StyledHeader>
    );
};

export default Navbar;