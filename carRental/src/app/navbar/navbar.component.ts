import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	donationCounter = 0;

  constructor() { }

  addDonation(){
  	this.donationCounter += 10;
  }

  ngOnInit(): void {
  }

}
