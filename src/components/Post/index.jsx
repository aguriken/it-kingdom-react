import { Headline } from "src/components/Headline";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();
  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Headline onClick={() => alert("clicked!!!")}>
        <code className="font-mono font-bold">src/pages/post</code>
      </Headline>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <p>Created by {user?.name}</p> : null}
    </div>
  )
}
