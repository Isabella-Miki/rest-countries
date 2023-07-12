import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string 
}
export default function Search({onChange, value}: Props) {
    return (
        <div className='bg-mentor-100 dark:bg-dark-100 p-4 mx-4 mt-8 rounded text-dark-200 dark:text-mentor-100 flex items-center md:w-2/4 md:mx-0'>
            <MagnifyingGlassIcon className='h-6 px-5 text-mentor-100' />
            <input type='text' placeholder='Search for a country...' className='bg-mentor-100 dark:bg-dark-100 outline-none w-full' onChange={onChange} value={value}>
            </input>
        </div>
    )
}
