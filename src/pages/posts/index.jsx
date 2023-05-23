import { Inter } from 'next/font/google'
import { Posts as PostsComponent } from 'src/components/Posts'
import { Header } from 'src/components/Header'

const inter = Inter({ subsets: ['latin'] })

const Posts = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <PostsComponent />
    </main>
  )
}

export default Posts