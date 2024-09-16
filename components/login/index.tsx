import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { message } from 'antd';
import { Input } from 'components/common';
import { Container, ContentFormWrapper, ForgetPasswordLink, ImageWrapper, LoginButton, LoginLayoutWrapper, InputsWrapper } from './style';
import { useState } from 'react';

type FieldValues = {
    phone: string
    password: string | number
}

const LoginPage = () => {

    const router = useRouter();
    const { handleSubmit, control, reset } = useForm<FieldValues>();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const result = await signIn('credentials', {
            redirect: false,
            phone: data.phone,
            password: data.password,
        });

        if (result?.error) {
            message.error(result.error);
        } else if (result?.ok) {
            message.success("Logged in successfully")
            const session = await fetch('/api/auth/session').then(res => res.json());

            if (session?.user?.role) {
                switch (session.user.role) {
                    case 'SUPER_ADMIN':
                        router.push('/admin');
                        break;
                    case 'USER':
                        router.push('/manager');
                        break;
                    default:
                        router.push('/');
                        break;
                }
            } else {
                message.error('No role found in session.');
            }
        }
        reset();
    };

    return (
        <LoginLayoutWrapper>
            <Container>
                <ImageWrapper>
                </ImageWrapper>
                <ContentFormWrapper onSubmit={handleSubmit(onSubmit)}>
                    <InputsWrapper>
                        <Input control={control} label='Phone Number' name='phone' />
                        <Input control={control} type='password' label='Password' name='password' />
                    </InputsWrapper>
                    <Link href='/reset-password'>
                        <ForgetPasswordLink>Forgot Password?</ForgetPasswordLink>
                    </Link>
                    <LoginButton type='submit'>
                        Login
                    </LoginButton>
                </ContentFormWrapper>
            </Container>
        </LoginLayoutWrapper>
    );
};

export default LoginPage;