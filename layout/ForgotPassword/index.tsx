import { Button, Input } from 'components'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Wrapper } from './styles'

const ForgotPasswordLayout = () => {
    const { control } = useForm()
    return (
        <Wrapper>
            <h1>Forgot your password?</h1>
            <p>Enter your username to reset your password</p>
            <form>
                <Input control={control} name='username' label='Username' />
                <Button label='Submit' size='large' customStyle={{ margin: '30px 0' }} />
            </form>
        </Wrapper>
    )
}

export default ForgotPasswordLayout