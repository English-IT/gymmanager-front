import React, { useEffect } from 'react';
import MainLayout from "../layout/Main";
import '../styles/globals.css'
import { Input } from 'components';
import { useForm } from 'react-hook-form';
import LoginLayout from 'layout/Login';

const DashboardPage = () => {
    const { control, watch } = useForm();

    useEffect(() => {
        console.log(watch());
    }, [watch('input')])

    return (
        // <MainLayout>
        //     <h1>Dashboard Content</h1>
        //     <Input control={control} label='Input' name='input' placeholder='type here...' />
        //     {watch('input') ? <p>value: {watch('input')}</p> : null}
        // </MainLayout>
        <LoginLayout />
    );
};

export default DashboardPage;