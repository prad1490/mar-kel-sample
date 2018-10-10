import { Component, ViewChild, ViewChildren, AfterViewInit, TemplateRef, ViewContainerRef, QueryList } from '@angular/core';
import { GlobalBtnDirective } from "./global-btn.directive";

@Component({
    selector: 'global-btn',
    templateUrl: './global-btn-template.html',
    styleUrls: ['./global-btn.scss']
})
export class GlobalBtnComponent {
    constructor() { }
    globalVal: string = "Global Re";
    globalDataSet = new Set(["Global Re", "CATCO", "Chubb", "Fred fronted", "MINT", "Markell Assurance"]);
    globalData = Array.from(this.globalDataSet);

    selectVal(val: string) {
        this.globalVal = val;
        this.globalData.unshift(val);
        this.globalDataSet = new Set(this.globalData);
    }
}