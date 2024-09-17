import React from 'react'
import { ResetPasword } from 'app'
import { withAuth } from 'hooks/withAuth';

export const getServerSideProps = async (context: any) => {
    const result = await withAuth(context, ['SUPER_ADMIN', "USER"]);

    if (result.redirect?.destination === '/login') {
        if (context.resolvedUrl === '/login') {
            return { props: {} };
        }
    }

    return result;
};

const ResetPaswordPage = () => {
    return (
        <ResetPasword />
    )
}

ResetPaswordPage.getLayout = function getLayout(page: React.ReactNode) {
    return <>{page}</>;
};

export default ResetPaswordPage