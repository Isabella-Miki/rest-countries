export interface ICountry {
    name: {
        lenght: number;
        common: string,
        official: string,
        nativeName: {
            [key: string]: {
                official: string;
            }
        };
    },
    flags: {
        png: string;
        alt: string;
    },
    region: string,
    capital: string,
    population: number,
    subregion: string,
    tld: string[],
    currencies: {
        [coinNativeName: string]: {
            name: string;
        }
    },
    languages: {
        [nativeLanguage: string]: string;
    };
    borders: string[],
}
