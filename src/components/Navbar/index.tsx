import ToggleTheme from '../ToggleTheme'

export default function NavBar() {
  return (
    <div className='bg-mentor-100 dark:bg-dark-100 flex justify-between px-4 py-8 shadow-md dark:shadow-dark-300 items-center md:px-14'>
        <h1 className='font-bold'>Where in the world?</h1>
        <ToggleTheme />
    </div>
  )
}
