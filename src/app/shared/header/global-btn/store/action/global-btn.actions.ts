import { Action } from "@ngrx/store";
import { DropdownMenuItem } from "../model/global-btn.model";

export const SET_GLOBAL_BTN_NAME = "SET_GLOBAL_BTN_NAME";

export class Setglobalbtn implements Action {
    readonly type = SET_GLOBAL_BTN_NAME;
    constructor(public payload: DropdownMenuItem) { }
}

export type SetglobalBtnListActions = Setglobalbtn;


