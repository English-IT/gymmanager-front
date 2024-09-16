import React from 'react'
import Image from 'next/image'
import NoEntryPng from "../assets/Images/no-entry.png"
import styled from '@emotion/styled'
import { Button } from 'components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:1rem;
    margin-top: 3rem;
    text-align: center;
`

const UnauthorizedPage = () => {

    const handleBackClick = () => {
        if (typeof window !== "undefined") {
            window.history.go(-2);
        }
    }

    return (
        <Wrapper>
            <Image style={{ width: "20%", height: "20%" }} alt='unauthorized user' src={NoEntryPng} />
            <h1>
                You are not authorized
            </h1>
            <p>
                You tried to access a page you did not have prior
                authorization for.
            </p>
            <Button label='Back' style={{ padding: " 1rem 3rem" }} onClick={handleBackClick} />
        </Wrapper>
    )
}

UnauthorizedPage.getLayout = function getLayout(page: React.ReactNode) {
    return <>{page}</>;
};


export default UnauthorizedPage