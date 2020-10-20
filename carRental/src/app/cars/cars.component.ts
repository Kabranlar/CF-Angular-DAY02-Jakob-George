import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
	cars = [
	{
		manufacturer : "Suzuki",
		model : "Baleno",
		year : 2008
	},{
		manufacturer : "Skoda",
		model : "Octavia",
		year : 2000
	},{
		manufacturer : "VW",
		model : "Golf",
		year : 1991
	}
	];

  constructor() { }

  ngOnInit(): void {
  }

}
