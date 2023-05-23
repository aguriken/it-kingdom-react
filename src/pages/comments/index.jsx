import { Inter } from 'next/font/google'
import { Header } from "src/components/Header"
import { Comments as CommentsComponent } from "src/components/Comments"

const inter = Inter({ subsets: ['latin'] })

const Comments = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <Header/>
      <CommentsComponent />
    </main>
  )
}
export default Comments