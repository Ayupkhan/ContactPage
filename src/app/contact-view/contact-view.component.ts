import {Component, Input, OnInit} from '@angular/core';
import {UserModal} from '../Interfaces/user-modal';

@Component({
    selector: 'app-contact-view',
    templateUrl: './contact-view.component.html',
    styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {
    @Input() user: UserModal;
    @Input() isView: boolean;

    constructor() {
    }

    ngOnInit(): void {
    }

}
