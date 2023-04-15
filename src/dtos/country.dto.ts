export type CountryName = {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };


export type CountryCurrencies = {
    [key: string]: {
        name: string;
        symbol: string;
      };
};

export type CountryDemonyms = {
    [key: string]: {
        f: string;
        m: string;
      };
};

export type CountryTranslations = {
    [key: string]: {
        official: string;
        common: string;
      };
};


export interface ICountryDTO {
    name: CountryName;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: CountryCurrencies;
    idd: {
      root: string;
      suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: {
      [key: string]: string;
    };
    translations: CountryTranslations;
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: CountryDemonyms;
    flag: string;
    maps: {
      [key: string]: string;
    };
    population: number;
    fifa: string;
    car: {
      side: string;
    };
    timezones: string[];
    continents: string[];
    flags: {
      [key: string]: string;
    };
    coatOfArms: {
      [key: string]: string;
    };
    startOfWeek: string;
    capitalInfo: {
      latlng: number[];
    };
  }
  

