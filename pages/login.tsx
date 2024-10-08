import React from 'react'
import { Login } from 'app'
import { withAuth } from 'hooks/withAuth';
import LoginLayout from 'layout/LoginLayout';

export const getServerSideProps = async (context: any) => {
    const result = await withAuth(context, ['SUPER_ADMIN', "USER"]);

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