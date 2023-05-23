import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { data, error , isLoading } = useUser()
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
        <p>ユーザー情報</p>
        <ol>
          <li>名前: {data?.name}</li>
          <li>電話番号: {data?.phone}</li>
          <li>Eメール: {data?.email}</li>
          <li>郵便番号: {data?.address.zipcode}</li>
          <li>住所: {data?.address.city}</li>
          <li>住所2: {data?.address.street}</li>
        </ol>
      </div>
  )
};