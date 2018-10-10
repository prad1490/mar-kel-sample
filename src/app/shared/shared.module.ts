import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalBtnDirective } from './header/global-btn/global-btn.directive';
import { GlobalBtnComponent } from './header/global-btn/global-btn-component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [
        GlobalBtnDirective,
        GlobalBtnComponent,
        HeaderComponent
    ],
    exports: [
        GlobalBtnDirective,
        GlobalBtnComponent,
        HeaderComponent,
        AngularFontAwesomeModule


    ]
})
export class SharedModule { }