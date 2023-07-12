import { useEffect, useState } from "react";
import axios from 'axios'
import Card from "./Card";
import DetailsCard from "./DetailsCard";
import Search from "../Search";
import DropDown from "../DropDown";
import { ICountry } from "../../interfaces/ICountry";

export default function GroupCard() {
    const [isActiveDetails, setIsActiveDetails] = useState(false)
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState<ICountry>({} as ICountry);
    const [currentHeight, setCurrentHeight] = useState(0);
    const [searchInput, setSearchInput] = useState('');
    const [selectInput, setSelectInput] = useState('');
    const [filterCountries, setFilterCountries] = useState([]);

    const getCountries = async () => {
        try {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            setCountries(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCountries();
    }, [])


    const travarScroll = useEffect(() => {
        const handleScroll = (event: Event) => {
            if (isActiveDetails) {
                event.preventDefault();
                window.scrollTo(0, currentHeight); // Mantém a posição atual do scroll
            }
        };

        if (isActiveDetails) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isActiveDetails, currentHeight]);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectInput(e.target.value);
    }

    useEffect(() => {
        const result = countries.filter(
            (country) =>
                (!searchInput || (country['name']['common'] as string).toLowerCase() === searchInput.toLowerCase()) &&
                (!selectInput || country['region'] === selectInput)
        );
        setFilterCountries(result);
    }, [searchInput, countries, selectInput]);

    return (
        <div>
            <div className="md:flex md:justify-between md:px-14">

                <Search value={searchInput} onChange={handleChangeInput} />
                <DropDown onChange={handleChangeSelect} options={['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']} />
            </div>

            <div className={` ${isActiveDetails ? 'dark:bg-dark-200/20 opacity-5' : 'dark:bg-dark-200'} flex flex-col justify-center mt-20 items-center gap-10 sm:flex-row flex-wrap sm:justify-around sm:px-12`}>
                {filterCountries.length > 0 &&
                    filterCountries.map((country: any, index) => {
                        return (
                            <Card
                                key={index}
                                country={country}
                                onClick={() => {
                                    setIsActiveDetails(!isActiveDetails)
                                    setSelectedCountry(country)
                                    setCurrentHeight(window.scrollY)
                                    travarScroll
                                    console.log(currentHeight)
                                }}
                            />
                        )
                    })

                }
            </div>

            {isActiveDetails && <DetailsCard
                selectedCountry={selectedCountry}
                onClick={() => {
                    setIsActiveDetails(!isActiveDetails);
                }}
                modalHeight={currentHeight}
            />
            }
        </div>

    )
}