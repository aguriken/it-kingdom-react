import { Inter } from 'next/font/google'
import { Headline } from 'src/components/Headline'
import { Posts } from 'src/components/Posts'
import { Header } from 'src/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <Headline onClick={() => alert("clicked!!!")}>
        <code className="font-mono font-bold">src/pages/index.js</code>
      </Headline>
      <Posts />
    </main>
  )
}
