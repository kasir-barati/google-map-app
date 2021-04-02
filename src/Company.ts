import faker from 'faker';
import { Location } from './location';

export class Company {
    private _name: string;
    private _catchPhrase: string;
    private _location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this._name = faker.company.companyName();
        this._catchPhrase = faker.company.catchPhrase();
        this._location = {
            lat: Number(faker.address.latitude()),
            lng: Number(faker.address.longitude()),
        };
    }

    public get name(): string {
        return this._name;
    }

    public get location(): Location {
        return this._location;
    }

    public get catchPhrase(): string {
        return this._catchPhrase;
    }

    public getInfo(): string {
        return `
            Company name: ${this._name}.
            Company catch phrase: ${this._catchPhrase}.
        `;
    }

    public getTitle(): string {
        return this.name;
    }

    public getPosition(): Location {
        return this.location;
    }
}
