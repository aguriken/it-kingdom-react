import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { data, error , isLoading } = useComment()
  if (isLoading) {
    return (
      <div >
        <div>ローディング中です</div>
      </div>
    )
  };

  if (error) {
    return (
      <div>
        <div>{error.message}</div>
      </div>
    )
  };

  return (
      <div>
        <p>コメンt情報</p>
        <ol>
          <li>詳細: {data?.body}</li>
          <li>投稿者: {data?.name}</li>
        </ol>
      </div>
  )
};