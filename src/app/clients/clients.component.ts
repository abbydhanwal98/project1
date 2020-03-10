import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private http: HttpClient) { }


  /* public data = [
    	{name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    	{name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    	{name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    	{name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
	];*/
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  persons: Person[];

  ngOnInit(): void {
    this.datatableFunc();
  }

  datatableFunc(){
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        console.log(dataTablesParameters);
        that.http
          .post<DataTablesResponse>(
            'https://angular-datatables-demo-server.herokuapp.com/',
            dataTablesParameters, {}
          ).subscribe(resp => {
            console.log(resp);
            that.persons = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
    };
  }//datatableFunc

}