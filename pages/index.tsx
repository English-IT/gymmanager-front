import React, { useEffect } from 'react';
import MainLayout from '../layout/Main';

const DashboardPage = () => {

    return <div>dashboard</div>;
};

DashboardPage.getLayout = function getLayout(page: React.ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default DashboardPage;
