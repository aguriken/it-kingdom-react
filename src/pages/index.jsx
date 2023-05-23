import { Inter } from 'next/font/google'
import { Links } from 'src/components/Links'
import { Headline } from 'src/components/Headline'
import { Header } from 'src/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONPLACEHOLDERのAPIを色々叩いて見るよ！</p>
      <Links />
    </main>
  )
}
