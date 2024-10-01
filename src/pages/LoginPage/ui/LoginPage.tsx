import { LoginForm } from '../../../widgets/LoginForm';
import cls from './LoginPage.module.scss';

function LoginPage() {
    return <div className={cls.LoginPage}>
        <LoginForm />
    </div>
}

export default LoginPage;
