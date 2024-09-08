import {
    PasswordInput,
    Paper,
    Title,
    Container,
    Button,
    Text,
    TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { user } from '../../constant';
import useAuth from '../../hooks/useAuth';

export const LoginForm = () => {
    const navigate = useNavigate();
    const { login } = useAuth()
    const { key, getInputProps, values, onSubmit, setErrors } = useForm({
        mode: "controlled",
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const handleSignIn = () => {
        if (user.email === values.email && user.password === values.password) {
            login({ email: values.email, password: values.password })
            navigate("/")
        } else if (user.email !== values.email) {
            setErrors({ "email": "Enter valid email" })
        }
        else if (user.password !== values.password) {
            setErrors({ "password": "Incorrect password" })
        }
    }

    return (
        <Container my={40}>
            <Title ta="center">
                Welcome back!
            </Title>
            <form onSubmit={onSubmit(handleSignIn)}>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        key={key('email')}
                        mt={20}
                        {...getInputProps('email')}
                    />
                    <PasswordInput
                        withAsterisk
                        label="Password"
                        placeholder="password"
                        key={key('password')}
                        mt={20}
                        required
                        {...getInputProps('password')}
                    />
                    <Button type="submit" onClick={handleSignIn} fullWidth mt="xl">
                        Sign in
                    </Button>
                    <Text my={20}>
                        ** admin@gmail.com | admin
                    </Text>
                </Paper>
            </form>
        </Container>
    );
}