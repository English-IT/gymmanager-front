import { Container, ContentFormWrapper, ForgetPasswordLink, ImageWrapper, LoginButton, LoginLayoutWrapper } from './style';
import { Input } from 'components';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

type FieldValues = {
    username: string
    password: string | number
}

const LoginLayout: React.FC = () => {
    const { handleSubmit, control } = useForm<FieldValues>();
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data, "data")
    }

    return (
        <LoginLayoutWrapper>
            <Container>
                <ImageWrapper>
                </ImageWrapper>
                <ContentFormWrapper >
                    <Input control={control} label='Username' name='username' placeholder='Username' />
                    <Input control={control} label='Password' name='password' placeholder='Password' />
                    <Link href='/reset-password'>
                        <ForgetPasswordLink>Forgot Password?</ForgetPasswordLink>
                    </Link>
                    <LoginButton type="submit" onSubmit={() => handleSubmit(onSubmit)}>
                        Login
                    </LoginButton>
                </ContentFormWrapper>
            </Container>
        </LoginLayoutWrapper>
    );
};

export default LoginLayout;