import React, { useEffect } from 'react';
import MainLayout from "../layout/Main";
import '../styles/globals.css'
import { useForm } from 'react-hook-form';
// import LoginLayout from 'layout/Login';
import MembersPage from '../layout/MembersPage';

const DashboardPage = () => {
    const { control, watch } = useForm();

    useEffect(() => {
        console.log(watch());
    }, [watch('input')])

    return (
        <MainLayout>
            <MembersPage />
        </MainLayout>
        // <LoginLayout />
    );
};

export default DashboardPage;