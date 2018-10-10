import { Component, ViewChild, ViewChildren, AfterViewInit, TemplateRef, ViewContainerRef, QueryList, OnInit } from '@angular/core';
import { GlobalBtnDirective } from "./global-btn.directive";
import { Store } from '@ngrx/store';
import { DropdownMenuItem } from './store/model/global-btn.model';
import { Observable } from 'rxjs';
import { DropdownMenuState } from './store/State/global-btn.appState';

@Component({
    selector: 'global-btn',
    templateUrl: './global-btn-template.html',
    styleUrls: ['./global-btn.scss']
})
export class GlobalBtnComponent implements OnInit {

    menus: Observable<DropdownMenuItem[]>;
    menuTitle: string;
    constructor(private store: Store<DropdownMenuState>) {
        this.menus = this.store.select('menus');
        this.menus.subscribe(menu => this.menuTitle = menu[0].name)
    }
    ngOnInit() {

    }
}