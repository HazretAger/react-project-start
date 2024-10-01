import classNames from 'classnames';
import cls from './LoginButton.module.scss';
import { Button, ButtonType } from '@/shared/ui/Button/Button';

interface ILoginButtonProps {
    className?: string;
}

export const LoginButton = (props: ILoginButtonProps) => {
    const { className } = props;
    return (
        <Button className={classNames(cls.LoginButton, {}, [className])} theme={ButtonType.PRIMARY}>
            Войти
        </Button>
    );
};
