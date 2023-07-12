import { ArrowLeftIcon } from '@heroicons/react/24/solid'

interface Props {
  onClick: () => void
}
export default function ButtonBack({ onClick }: Props) {
  return (
    <button className='relative flex gap-3 dark:bg-dark-100 py-2 px-6 w-fit rounded' onClick={onClick}>
        <ArrowLeftIcon className='h-6'/>
        <p>Back</p>
    </button>
  )
}
