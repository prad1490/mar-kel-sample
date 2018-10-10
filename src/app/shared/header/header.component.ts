import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerName: string = "Global Reinsurance System";
  headerNameShort: string = "GRS";
  searchForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      "searchInput": new FormControl(null)
    });
  }

}

// <div class="inlineBlock flexBasis72">
// <input class="form-control form-control-lg form-control-borderless bgMarkellRed noBorder placeholderSearch fullHeight txtWhite"
//   type="search" placeholder="Search by Deal#/ Deal name">
// </div>