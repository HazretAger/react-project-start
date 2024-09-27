import classNames from 'classnames';
import cls from './Post.module.scss';

interface IPostProps {
    className?: string;
}

export const Post = (props: IPostProps) => {
    const { className } = props;
    return <div className={classNames(cls.User, {}, [className])}> Post entity </div>
}