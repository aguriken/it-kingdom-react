import { Inter } from 'next/font/google'
import { Header } from 'src/components/Header'
import { User as UserComponent} from 'src/components/User';

const inter = Inter({ subsets: ['latin'] })

const UserID = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <UserComponent />
    </main>
  )
};

export default UserID