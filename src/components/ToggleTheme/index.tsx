import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react'

export default function ToggleTheme() {
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    const pageClasses = document.documentElement.classList

    useEffect(() => {
        systemPreference && pageClasses.add('dark')
    })

    const toggle = () => {
        pageClasses.toggle('dark')
    }

    return (
        <div>
            <div className='hidden dark:block cursor-pointer' onClick={toggle}>
                <div className='flex gap-5 items-center'>
                    <SunIcon className='h-8' />
                    <p>Light Mode</p>
                </div>
            </div>

            <div className='block dark:hidden cursor-pointer' onClick={toggle}>
                <div className='flex gap-5 items-center'>
                    <MoonIcon className='h-8' />
                    <p>Dark Mode</p>
                </div>
            </div>
        </div>
    )
}
