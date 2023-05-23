import { Inter } from 'next/font/google'
import { Header } from 'src/components/Header'
import { Comment as CommentComponent} from 'src/components/Comment';

const inter = Inter({ subsets: ['latin'] })

const CommentID = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <CommentComponent />
    </main>
  )
};

export default CommentID