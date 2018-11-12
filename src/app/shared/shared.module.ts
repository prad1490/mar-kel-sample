import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalBtnDirective } from './header/global-btn/global-btn.directive';
import { GlobalBtnComponent } from './header/global-btn/global-btn-component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { TreeView } from './documents/document-view';
import { TreeViewDemo } from './documents/document-view-demo';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [
        GlobalBtnDirective,
        GlobalBtnComponent,
        HeaderComponent,
        TreeViewDemo,
        TreeView
    ],
    exports: [
        GlobalBtnDirective,
        GlobalBtnComponent,
        HeaderComponent,
        AngularFontAwesomeModule,
        TreeViewDemo,
        TreeView
    ]
})
export class SharedModule { }