import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {UserModal, UserSample} from '../Interfaces/user-modal';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    userData: Subject<any> = new Subject<any>();
    users: UserModal[] = [];

    constructor(
        private snackbar: MatSnackBar
    ) {
        this.users = [...UserSample]
    }

    addContact(newUser, action): void {
        if (action === 'add') {
            // check if existing user have same email id //
            let exist: boolean;
            if (this.users != null && this.users.length > 0) {
                exist = this.users.some((existUser) => {
                    return existUser.email === newUser.email;
                });
                if (exist) {
                    this.snackbar.open('Email id already exists', 'Undo', {
                        duration: 1500,
                        verticalPosition: 'top'
                    });
                } else {
                    this.users.push(newUser);
                    this.userData.next(this.users);
                }
            } else {
                this.users.push(newUser);
                this.userData.next(this.users);
            }
        } else {
            // for edit user details //
            this.users.forEach((arr, i) => {
                if (arr.email === newUser.email) {
                    this.users[i] = newUser;
                    this.userData.next(this.users);
                }
            });
        }
    }

    deleteContact(user): void {
        let count = this.indexByKeyValue(this.users, 'email', user.email);
        this.users.splice(count, 1);
        this.userData.next(this.users);
    }

    indexByKeyValue(users, key, email): any {
        let result = -1;
        for (let i = 0; i < users.length; i++) {
            if (users[i][key] === email) {
                result = i;
                break;
            }
        }
        return result;
    }
}
