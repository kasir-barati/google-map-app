import faker from 'faker';

export class User {
    private _name: string;
    private _location: { lng: number; lat: number };

    constructor() {
        this._name = faker.name.firstName();
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

    public userInfo(): string {
        return `
            Hi.
            The user name is: ${this._name}.
        `;
    }
}
