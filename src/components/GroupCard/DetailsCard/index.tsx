import { ICountry } from "../../../interfaces/ICountry";
import ButtonBack from "../../ButtonBack";

interface Props {
    selectedCountry: ICountry;
    onClick: () => void;
    modalHeight: number;
}

export default function DetailsCard({ selectedCountry, onClick, modalHeight }: Props) {
    const {
        name,
        flags,
        region,
        capital,
        population,
        subregion,
        tld,
        currencies,
        languages,
        borders,
    } = selectedCountry || {};

    const modalStyle = {
        top: `calc(50% + ${modalHeight}px)`,
        transform: `translateY(-50%)`,
    };

    return (
        <div className="absolute z-10 flex flex-col justify-center items-center right-1/4 left-1/4 " style={modalStyle}>
            <div className="dark:bg-dark-100  max-h-screen rounded py-5" >
                <ButtonBack onClick={onClick} />
                <div className="flex flex-col justify-center px-6 md:grid md:grid-cols-2 md:place-items-start md:gap-5">
                    <img src={flags.png} alt={flags.alt} className="mt-2 md:place-self-center object-cover" />
                    <div>
                        <div className="flex flex-col gap-2 pb-6">
                            <p className="text-xl font-bold my-4">{name.common}</p>
                            <p>Native Name: <span className="dark:text-gray-300">{name.nativeName ? name.nativeName[Object.keys(name.nativeName)[0]].official : ' '}</span></p>
                            <p>Population: <span className="dark:text-gray-300">{population}</span></p>
                            <p>Region: <span className="dark:text-gray-300">{region}</span></p>
                            <p>Sub Region: <span className="dark:text-gray-300">{subregion}</span></p>
                            <p>Capital: <span className="dark:text-gray-300">{capital}</span></p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p>Top Level Domain: <span className="dark:text-gray-300">{tld && tld.join(', ')}</span></p>
                            <p>Currencies: <span className="dark:text-gray-300">{currencies && currencies[Object.keys(currencies)[0]].name}</span></p>
                            <p>Languages: <span className="dark:text-gray-300">{languages && languages[Object.keys(languages)[0]]}</span></p>
                            <p className="mt-3">Border countries:
                                {borders &&
                                    <span className="flex flex-wrap items-start gap-3 mt-3">
                                        {borders.map((border) => {
                                            return (
                                                <span className=" rounded dark:bg-dark-100 text-base" key={border}>{border}</span>
                                            )
                                        })}
                                    </span>
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div >

        </div>
    )
}
