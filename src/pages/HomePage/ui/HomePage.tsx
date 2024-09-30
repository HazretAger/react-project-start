import { useQueryGetPosts } from '../../../entities/Post/model/requests/queries/useQueryGetPosts';
import { Button } from '../../../shared/ui/Button';
import { ButtonType } from '../../../shared/ui/Button/Button';
import './HomePage.scss';

function HomePage() {
    const query = useQueryGetPosts();
    console.log(query, 'requiest query');
    return <div>
        <Button theme={ButtonType.PRIMARY}>Home</Button>
    </div>
}

export default HomePage;
