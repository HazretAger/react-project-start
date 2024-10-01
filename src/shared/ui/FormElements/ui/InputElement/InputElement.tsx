import classNames from 'classnames';
import cls from './InputElement.module.scss';

interface IError {
    type: string;
    message: string;
    ref: HTMLInputElement;
}

interface InputElementProps {
    className?: string;
    placeholder?: string;
    required?: boolean;
    error: IError | undefined;
    register: any;
    name: string;
}

export const InputElement = (props: InputElementProps) => {
    const { className, placeholder = '', register, required = false, name, error } = props;
    return (
        <div className={classNames(cls.Field, {}, [className])}>
            <input className={cls.input} {...register(name, { required })} placeholder={placeholder} />
            <div className={classNames(cls.error, { [cls.isActive]: error }, [])}>Заполните обязательное поле</div>
        </div>
    );
};
