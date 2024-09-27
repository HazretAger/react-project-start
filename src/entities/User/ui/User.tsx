import classNames from 'classnames';
import cls from './User.module.scss';

interface IUserProps {
    className?: string;
}

export const User = (props: IUserProps) => {
    const { className } = props;
    return <div className={classNames(cls.User, {}, [className])}> User entity </div>
}