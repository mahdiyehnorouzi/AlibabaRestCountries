import { ICountryDTO } from "../dtos/country.dto";
import { ICountries } from "../interfaces/countries";

export class Countries  {

    public constructor(private _service: ICountries) {}

    public findAll(): Promise<ICountryDTO[]> {
        return this._service.findAll();
    }

    public findByName(name:string): Promise<ICountryDTO> {
        return this._service.findByName(name);
    }

}