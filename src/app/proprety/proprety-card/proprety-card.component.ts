import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proprety-card',
  templateUrl: './proprety-card.component.html',
  styleUrls: ['./proprety-card.component.css']
})
export class PropretyCardComponent implements OnInit {

  Prorety : any = {
    "id":1,
    "Name": "Dream House",
    "Type":"House",
    "Price":12000
  }

  constructor() { }

  ngOnInit() {
  }

}
