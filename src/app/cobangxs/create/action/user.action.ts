import { User } from '../model/User';

export class AddUser {
    static readonly type = '[User] Add';

    constructor(public payload: User) {}
}

export class GetUser {
    static readonly type = '[User] Get';
}

export class UpdateUser {
    static readonly type = '[User] Update';
    
    constructor(public payload: User, public id: number){

    }
}

export class DeleteUser {
    static readonly type = '[User] Delete';
    
    constructor(public payload: User){

    }
}

export class SetSelectedUser{
    static readonly type = '[User] Set';

    constructor(public payload: User){
        
    }
}