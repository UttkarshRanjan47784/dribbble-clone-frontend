import ModeToggle from '@/components/mode-toggle'
import ProfileForm from '@/components/profileform/ProfileForm'
import React from 'react'

export default function CreateProfile() {
  return (
    <div className='md:grid md:grid-cols-8 h-dvh p-5 my-2 md:my-0'>
        <div className='hidden md:block col-span-2'>
            <span className='pacifico-regular mr-3 text-3xl text-primary'>dribbble</span>
        </div>
        <ProfileForm />
        <div className='hidden md:flex justify-end'>
            <ModeToggle />
        </div>
    </div>
  )
}
