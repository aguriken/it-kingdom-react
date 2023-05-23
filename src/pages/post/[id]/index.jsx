import { useRouter } from "next/router"
import { Headline } from 'src/components/Headline'

const PostId = () => {
  const router = useRouter();
  return (
    <div>
      <Headline onClick={() => alert("clicked!!!")}>
        <code className="font-mono font-bold">src/pages/post</code>
      </Headline>
      <div>{router.query.id}</div>
    </div>
  )
}

export default PostId