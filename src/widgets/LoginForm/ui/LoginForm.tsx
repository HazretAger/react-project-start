import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginButton } from '@/features/Auth';
import { Form, InputElement } from '@/shared/ui/FormElements';
import cls from './LoginForm.module.scss';

type IFields = {
    login: string;
    password: string;
};

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IFields>();

    const onSubmit: SubmitHandler<IFields> = (data: IFields) => {
        console.log(data, 'data here');
    };

    return (
        <Form className={cls.LoginForm} onSubmit={handleSubmit(onSubmit)}>
            <InputElement name={'login'} register={register} error={errors?.login && undefined} required />
            <InputElement name={'password'} register={register} error={errors?.password && undefined} required />
            <LoginButton />
        </Form>
    );
};
