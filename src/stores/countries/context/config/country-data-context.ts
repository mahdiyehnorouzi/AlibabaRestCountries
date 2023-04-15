import { createContext } from 'react';
import { ICountryDTO } from '../../../../dtos/country.dto';

export const DataContext = createContext<ICountryDTO>({
    name: {
        common: 'Mockland',
        official: 'The Mock Republic of Mockland',
        nativeName: {
          eng: {
            official: 'The Mock Republic of Mockland',
            common: 'Mockland',
          },
        },
      },
      tld: ['.mk'],
      cca2: 'MK',
      ccn3: '111',
      cca3: 'MKD',
      cioc: 'MKD',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        MKD: {
          name: 'Macedonian denar',
          symbol: 'ден',
        },
      },
      idd: {
        root: '+389',
        suffixes: [''],
      },
      capital: ['Skopje'],
      altSpellings: ['MK', 'The Mock Republic of Mockland', 'Mockland'],
      region: 'Europe',
      subregion: 'Southeast Europe',
      languages: {
        eng: 'English',
        mkd: 'Macedonian',
      },
      translations: {
        ces: {
          official: 'Mocklandská republika',
          common: 'Mockland',
        },
        deu: {
          official: 'Die Mock Republik von Mockland',
          common: 'Mockland',
        },
        fra: {
          official: 'République mock de Mockland',
          common: 'Mockland',
        },
        hrv: {
          official: 'Mock Republika Mockland',
          common: 'Mockland',
        },
        ita: {
          official: 'La Repubblica mock di Mockland',
          common: 'Mockland',
        },
        jpn: {
          official: 'モック共和国',
          common: 'モックランド',
        },
        kor: {
          official: '모크 공화국',
          common: '모크랜드',
        },
        nld: {
          official: 'De Mock Republiek van Mockland',
          common: 'Mockland',
        },
        por: {
          official: 'A República Mock da Mockland',
          common: 'Mockland',
        },
        rus: {
          official: 'Мок Республика Мокланд',
          common: 'Мокланд',
        },
        spa: {
          official: 'La República mock de Mockland',
          common: 'Mockland',
        },
        svk: {
          official: 'Mocklandská republika',
          common: 'Mockland',
        },
        swe: {
          official: 'Mockrepubliken Mockland',
          common: 'Mockland',
        },
        urd: {
          official: 'موک جمہوریہ موکلینڈ',
          common: 'موکلینڈ',
        },
        zho: {
          official: '莫克共和国',
          common: '莫克兰',
        },
      },
      latlng: [41.6086, 21.7453],
      landlocked: true,
      area: 25713,
      demonyms: {
        eng: {
          f: 'Mocklander',
          m: 'Mocklander',
        },
        mkd: {
          f: 'Мокландерка',
          m: 'Мокландер',
        },
    },
flag: 'https://restcountries.com/data/mkd.svg',
maps: {
googleMaps: 'https://goo.gl/maps/XuUhR6FK9uw8fMEz6',
openStreetMaps: 'https://www.openstreetmap.org/relation/324076',
},
population: 2077132,
fifa: 'MKD',
car: {
side: 'right',
},
timezones: ['UTC+01:00'],
continents: ['Europe'],
flags: {
svg: 'https://restcountries.com/data/mkd.svg',
png: 'https://restcountries.com/data/mkd.png',
},
coatOfArms: {
png: 'https://restcountries.com/data/mkd.png',
svg: 'https://restcountries.com/data/mkd.svg',
},
startOfWeek: 'Monday',
capitalInfo: {
latlng: [41.9973, 21.4279],
}    
});