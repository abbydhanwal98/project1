import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

   public data = [
    	{name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    	{name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    	{name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    	{name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
	];
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
  	this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }





}//class
