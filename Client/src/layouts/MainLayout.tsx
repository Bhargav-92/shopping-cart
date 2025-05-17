import Appbar from '@/components/Appbar'
import {Outlet} from 'react-router'

const MainLayout = () => {
  return (
    <>
      <Appbar/>
      <Outlet/>
    </>
  )
}

export default MainLayout
