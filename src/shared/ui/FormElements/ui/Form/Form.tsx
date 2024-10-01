import classNames from 'classnames';
import cls from './Form.module.scss';

interface IFormProps {
    className?: string;
    children: React.ReactNode;
    onSubmit: () => void;
}

export const Form = (props: IFormProps) => {
    const { className, children, onSubmit } = props;

    return (
        <form className={classNames(cls.Form, {}, [className])} onSubmit={onSubmit}>
            {children}
        </form>
    );
};
