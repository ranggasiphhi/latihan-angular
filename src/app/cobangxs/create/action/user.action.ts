import { User } from '../model/User';

export class AddUser {
    static readonly type = '[User] Add';

    constructor(public payload: User) {}
}