import classNames from 'classnames';
import cls from './Button.module.scss';

export enum ButtonType {
    PRIMARY = 'primary',
    OUTLINE = 'outline',
}

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    theme: ButtonType;
}

export const Button = (props: ButtonProps) => {
    const { className, children, theme } = props;
    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])}>
            <div className={cls.content}>
                <p className={cls.text}>{children}</p>
            </div>
        </button>
    );
};
