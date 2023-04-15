import { ICountryDTO } from '../dtos/country.dto';
import { ICountries } from '../interfaces/countries';
import { server } from '../lib/axios/axios';

export class CountriesService implements ICountries {
    public async findAll(): Promise<ICountryDTO[]> {
        const response = await server.get('all');
        return response.data;
    }

    public async findByName(name:string): Promise<ICountryDTO> {
        const response = await server.get(`name/${name}`);
        return response.data[0];
    }
    
}