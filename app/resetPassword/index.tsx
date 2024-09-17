import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input } from 'components'
import { Wrapper } from './styles'

const ForgotPasswordLayout = () => {
    const { control } = useForm()
    return (
        <Wrapper>
            <h1>Forgot your password?</h1>
            <p>Enter your username to reset your password</p>
            <form>
                <Input control={control} name='username' label='Username' />
                <Button style={{ width: "100%", marginTop: "2rem" }} label='Submit' size='large' />
            </form>
        </Wrapper>
    )
}

export default ForgotPasswordLayout