import { Component, ViewChild, ViewChildren, AfterViewInit, TemplateRef, ViewContainerRef, QueryList, OnInit } from '@angular/core';
import { GlobalBtnDirective } from "./global-btn.directive";
import { Store } from '@ngrx/store';
import { DropdownMenuItem } from './store/model/global-btn.model';
import { Observable } from 'rxjs';
import { DropdownMenuState } from './store/State/global-btn.appState';
import * as SetglobalBtnListActions from "./store/action/global-btn.actions"

@Component({
    selector: 'global-btn',
    templateUrl: './global-btn-template.html',
    styleUrls: ['./global-btn.scss']
})
export class GlobalBtnComponent implements OnInit {

    menus: Observable<DropdownMenuItem[]>;
    menuTitle: string;
    menuList: any;
    constructor(private store: Store<DropdownMenuState>) {
        this.menus = this.store.select('menus');
        this.menus.subscribe(menu => {
            this.menuTitle = Object.values(menu)[0][0];
            this.menuList = Object.values(menu)[0];
        });
    }
    ngOnInit() {

    }

    selectVal(val: string) {
        this.store.dispatch(new SetglobalBtnListActions.Setglobalbtn(val));
    }
}