import { Action } from "@ngrx/store";
import * as  SetglobalBtnListActions from "../action/global-btn.actions";
import { DropdownMenuItem } from "../model/global-btn.model";


const initialState: DropdownMenuItem = {
    menuItems: ["Global Re", "chubb", "A", "B", "C", "D"]
};

export function globalBtnListReducer(state: any = initialState,
    action: SetglobalBtnListActions.SetglobalBtnListActions) {
    switch (action.type) {
        case SetglobalBtnListActions.SET_GRS_DROPDOWN:
            state.menuItems.unshift(action.payload);
            return [state.menuItems.filter((el, i) => {
                return state.menuItems.indexOf(el) == i;
            })];
        default:
            return state;
    }
}

