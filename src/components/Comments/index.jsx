import Link from 'next/link'
import { useComments } from 'src/hooks/useComments'

export const Comments = () => {
  const { data, error, isLoading } = useComments()
  if (isLoading) {
    return <div>ローディング中です</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <ol className="w-90">
      {data?.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`} className='flex'>
              <p className='mr-4'>{comment.id}.</p>
              <p className='mr-4'>{comment.body}</p>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}