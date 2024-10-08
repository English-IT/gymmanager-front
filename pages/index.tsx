import React from 'react';
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

const Home = () => {

    return <div>dashboard</div>;
};


export default Home;
