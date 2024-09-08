import React from 'react';
import { UserForm } from '../components';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    width: 40vw;
    margin: 3rem auto;
    padding: 20px;  
    border-radius: 8px;
    box-shadow: 0 0  5px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 1240px) {
        width: 50vw;
    }

    @media screen and (max-width: 910px) {
        width: 60vw;
    }

    h1{
        font-weight: 600;
        text-align: center; 
        margin: 10px 0
    }
`

const AddUserPage: React.FC = () => {

    return (
        <Wrapper>
            <h1>Add New User</h1>
            <UserForm />
        </Wrapper>
    );
};

export default AddUserPage;
