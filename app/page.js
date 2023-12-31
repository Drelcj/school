import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Header from './(home)/_components/Header'
import LandingPage from './(home)/_components/LandingPage'

export default function Home() {
  return (
    <div>
      {/* <UserButton afterSignOutUrl="/" />  This is the Home page*/}
      <LandingPage/>
    </div>
  )
}
