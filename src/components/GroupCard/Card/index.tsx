import { ICountry } from "../../../interfaces/ICountry";

interface Props {
    country: ICountry;
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

export default function Card({ country, onClick}: Props) {
    const {
        name,
        flags,
        region,
        capital,
        population,
    } = country || {};

    return (
        <div className='flex flex-col w-3/4 bg-mentor-100 dark:bg-dark-100 rounded sm:max-w-xs h-fit' onClick={onClick} >
            <img src={flags.png} alt={flags.alt} className='rounded-t h-64 object-cover' />
            <div className='p-5 text-dark-300 dark:text-mentor-100 flex flex-col gap-2'>
                <p className='mb-3 font-bold text-xl'>{name.common}</p>
                <p>Population: <span className='text-gray-300'>{population}</span></p>
                <p>Region: <span className='text-gray-300'>{region}</span></p>
                <p>Capital: <span className='text-gray-300'>{capital}</span></p>
            </div>
        </div>
    )

}
