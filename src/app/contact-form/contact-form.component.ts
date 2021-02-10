import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModal} from '../Interfaces/user-modal';
import {ContactService} from '../Services/contact.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
    userData: UserModal = {};
    contactForm: FormGroup;
    toPerform: any;

    constructor(private  formBuilder: FormBuilder,
                private contactSvc: ContactService,
                private dialogRef: MatDialogRef<ContactFormComponent>,
                @Inject(MAT_DIALOG_DATA) private data: any) {
        if (data.action === 'edit') {
            this.userData = data.data;
            this.toPerform = 'edit';
        } else {
            this.userData = {};
            this.toPerform = 'add';
        }
        dialogRef.disableClose = true;
    }

    get f(): any {
        return this.contactForm.controls;
    }

    ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            firstName: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3)
            ])],
            lastName: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3)
            ])],
            email: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')
            ])],
            mobile: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ])],
            company: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3)
            ])]
        });
    }

    submitData(userData): void {
        this.contactSvc.addContact(userData, this.toPerform);
        this.dialogRef.close(userData);
    }

    cancel(): void {
        this.dialogRef.close();
    }

}
