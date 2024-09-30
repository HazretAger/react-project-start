import classNames from 'classnames';
import cls from './Form.module.scss';

interface IFormProps {
    className?: string;
    children: React.ReactNode;
}

export const Form = (props: IFormProps) => {
    const { className, children } = props;
    return (
        <form className={classNames(cls.Form, {}, [className])}>
            {children}
        </form>
    )
}
