import { State, Action, StateContext, Selector} from '@ngxs/store';
import { User } from '../model/User';
import { AddUser, DeleteUser, GetUser, SetSelectedUser,  UpdateUser} from '../action/user.action';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs/operators';
export class UserStateModel {
    users: User[];
    selectedUser: User;
}

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: [],
        selectedUser: null
    }
})
export class UserState {
    constructor(private userService: UserService){

    }

    @Selector()
    static getUsers(state: UserStateModel){
        return state.users;
    }

    @Selector()
    static getSelectedUser(state: UserStateModel){
        return state.selectedUser;
    }

    @Action(GetUser)
    getUsers({getState, setState}: StateContext<UserStateModel>, { payload }: AddUser)
    {
        return this.userService.fetchUsers().pipe(tap((result)=>{
            const state = getState();
            console.log('state1', state);
            console.log('state2', setState({
                ...state,
                users: result,
            }));
            setState({
                ...state,
                users: result,
            });
        }));
    }
}