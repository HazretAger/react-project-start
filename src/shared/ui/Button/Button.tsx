import classNames from 'classnames';
import cls from './Button.module.scss';

interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    const { className, children } = props;
    return <button className={classNames(cls.Button, {}, [className])}>Button component</button>
}
