import React from 'react'
import Image from 'next/image'
import LoadingGif from "../assets/Gif/rotate.gif"
import styled from '@emotion/styled'

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1rem;
    font-size: 16px; 

    span{
        font-size: 3em;
        font-weight: 400;
    }

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`



const Loader = () => {
    return (
        <Wrapper>
            <span>Loading</span>
            <Image style={{ maxWidth: "70px", maxHeight: "70px" }} alt="loading" src={LoadingGif} />
        </Wrapper>
    )
}

export default Loader