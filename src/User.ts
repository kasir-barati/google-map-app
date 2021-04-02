import faker from 'faker';
import { Location } from './location';

export class User {
    private _name: string;
    private _location: Location;

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

    public get location(): Location {
        return this._location;
    }

    public getInfo(): string {
        return `
            Hi.
            The user name is: ${this._name}.
        `;
    }

    public getTitle(): string {
        return this.name;
    }

    public getPosition(): Location {
        return this.location;
    }
}
