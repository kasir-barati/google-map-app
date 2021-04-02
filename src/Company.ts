import faker from 'faker';

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

    public get location(): { lat: number; lng: number } {
        return this._location;
    }

    public get catchPhrase(): string {
        return this._catchPhrase;
    }

    public companyInfo(): string {
        return `
            Company name: ${this._name}.
            Company catch phrase: ${this._catchPhrase}.
        `;
    }
}
