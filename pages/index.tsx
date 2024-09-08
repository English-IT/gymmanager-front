// pages/index.tsx
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import MembersPage from '../layout/MembersPage';
import MainLayout from '../layout/Main'; // Import your MainLayout

const DashboardPage = () => {
    const { control, watch } = useForm();

    useEffect(() => {
        console.log(watch());
    }, [watch('input')]);

    return <div>dashboard</div>;
};

// Define the custom layout for this page
DashboardPage.getLayout = function getLayout(page: React.ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default DashboardPage;
