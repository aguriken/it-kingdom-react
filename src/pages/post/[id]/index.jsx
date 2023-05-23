import { Post } from 'src/components/Post';
import { usePost } from 'src/hooks/usePost';

const PostId = () => {
  const {post, user, error, isLoading} = usePost();
  return (
    <Post />
  )
}

export default PostId