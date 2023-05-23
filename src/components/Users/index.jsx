import Link from 'next/link'
import { useUsers } from 'src/hooks/useUsers'

export const Users = () => {
  const { data, error, isLoading } = useUsers()
  if (isLoading) {
    return <div>ローディング中です</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <ol className="w-90">
      {data?.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} className='flex'>
              <p className='mr-4'>{user.id}.</p>
              <p className='mr-4'>{user.name}</p>
              <p>{user.email}</p>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}