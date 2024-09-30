import classNames from 'classnames';
import cls from './InputElement.module.scss';

interface InputElementProps {
    className?: string;
    placeholder?: string;
}

export const InputElement = (props: InputElementProps) => {
    const { className, placeholder = ''} = props;
    return <input className={classNames(cls.Button, {}, [className])} placeholder={placeholder}/>
}