import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ContactComponent} from './contact/contact.component';
import {ContactViewComponent} from './contact-view/contact-view.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ContactService} from './Services/contact.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BackgroundDirective } from './background.directive';


@NgModule({
    declarations: [
        AppComponent,
        ContactComponent,
        ContactViewComponent,
        ContactFormComponent,
        BackgroundDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatCheckboxModule
    ],
    providers: [
        ContactService
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        ContactFormComponent
    ]
})
export class AppModule {
}
