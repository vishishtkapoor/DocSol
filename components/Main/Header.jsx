import { Button } from '@nextui-org/react'
import React from 'react'


const Header = () => {
  return (
    <>
    <div className='flex justify-between px-4  pt-4 '>
        <h2>Get Your Certificates</h2>
        <div className='flex'>
            <Button className='mx-4'>Claim</Button>
            <Button onclcik>Connect</Button>
        </div>
    
    </div>
    
    {/* <CertificateTable /> */}

    </>
  )
}

export default Header