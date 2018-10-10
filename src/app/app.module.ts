import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { } from "ag-grid-enterprise"

import { AppComponent } from './app.component';
import { AgGridModule, } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AgGridModule.withComponents([AppComponent]),
        HttpClientModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
