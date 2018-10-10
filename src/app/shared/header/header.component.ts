import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerName: string = "Global Reinsurance System";
  headerNameShort: string = "GRS";
  constructor() { }

  ngOnInit() {
  }

}
