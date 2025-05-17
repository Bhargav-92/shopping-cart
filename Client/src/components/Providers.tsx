import React from 'react'
import {Toaster } from 'sonner'
const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      {children}
      <Toaster richColors/>
    </div>
  )
}

export default Providers
