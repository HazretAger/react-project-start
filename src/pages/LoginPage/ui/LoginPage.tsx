
import { Form } from '../../../shared/ui/FormElements/ui/Form/Form';
import { InputElement } from '../../../shared/ui/FormElements/ui/InputElement/InputElement';
import cls from './LoginPage.module.scss';

function LoginPage() {
    return <div className={cls.LoginPage}>
        <Form>
            <InputElement />
        </Form>
    </div>
}

export default LoginPage;
