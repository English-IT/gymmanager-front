import React from 'react'
import { Login } from 'components'
import { useAuth } from 'hooks/useAuth';
import LoginLayout from 'layout/LoginLayout';

export const getServerSideProps = async (context: any) => {
    const result = await useAuth(context, ['SUPER_ADMIN', "USER"]);

    if (result.redirect?.destination === '/login') {
        if (context.resolvedUrl === '/login') {
            return { props: {} };
        }
    }

    return result;
};

const LoginPage = () => {
    return (
        <Login />
    )
}

LoginPage.getLayout = function getLayout(page: React.ReactNode) {
    return <LoginLayout>{page}</LoginLayout>;
};

export default LoginPage;