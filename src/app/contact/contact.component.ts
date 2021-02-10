import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ContactFormComponent} from '../contact-form/contact-form.component';
import {ContactService} from '../Services/contact.service';
import {UserModal, UserSample} from '../Interfaces/user-modal';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    users: UserModal[] = [];
    selectedUser: UserModal;
    contactView: boolean;
    loggedInUser: any;
    // availableUserList: any[] = [];

    constructor(private dialog: MatDialog, private contactSvc: ContactService) {
    }

    ngOnInit(): void {
        this.users = [...UserSample];
        this.selectedUser = this.users[0];
        this.loggedInUser = this.users[0]
        this.contactView = true;
        this.contactSvc.userData.subscribe(res => {
            this.users = res;
        });
    }

    addContact(): void {
        this.contactView = false;
        const userData = {
            data: {},
            action: 'add'
        };
        let contactFormComponent = this.dialog.open(ContactFormComponent, {
            width: '400px',
            height: 'auto',
            minHeight: '400px',
            data: userData
        });
    }

    viewContact(user, i): void {
        this.selectedUser = user;
        this.contactView = true;
    }

    editContact(user): void {
        this.contactView = false;
        const userData = {
            data: Object.assign({}, user),
            action: 'edit'
        };
        let contactFormComponent = this.dialog.open(ContactFormComponent, {
            width: '400px',
            height: 'auto',
            minHeight: '400px',
            data: userData
        });
    }

    deleteContact(user): void {
        this.contactView = false;
        this.contactSvc.deleteContact(user);
    }
    selectLoginUser(user): void {
        this.loggedInUser = user
    }
}
