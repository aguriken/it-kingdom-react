import { Inter } from 'next/font/google'
import { Header } from "src/components/Header"
import { Users as UsersComponent } from "src/components/Users"

const inter = Inter({ subsets: ['latin'] })

const Users = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <Header/>
      <UsersComponent />
    </main>
  )
}
export default Users