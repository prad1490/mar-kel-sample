import { Action } from "@ngrx/store";
import * as  SetglobalBtnListActions from "../action/global-btn.actions";
import { DropdownMenuItem } from "../model/global-btn.model";


const initialState: DropdownMenuItem = {
    name: "Global Re"
}


export function globalBtnListReducer(state: DropdownMenuItem[] = [initialState],
    action: SetglobalBtnListActions.SetglobalBtnListActions) {
    switch (action.type) {
        case SetglobalBtnListActions.SET_GLOBAL_BTN_NAME:
            return [...state, action.payload];
        default:
            return state;
    }


}

