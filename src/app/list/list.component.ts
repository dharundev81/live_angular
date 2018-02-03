import { Component, OnInit, NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms'

import { AppComponent } from '../app.component';
import {EmployeeService} from '../employee.service';
import { AppString } from '../app.string';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employee: any;

  response: any;

  user: AppString;

  constructor(private _employeeservices: EmployeeService ) { 

    this.user = new AppString();
  }

  ngOnInit() {

    // this.employee = this._employeeservices.getEmployee();
    
  }

  display: string;

  id(id:any){
    console.log(id);
    this._employeeservices.postEmployee(id)
      .subscribe(resEmpDetails => this.response = resEmpDetails );
      // this.response = JSON.stringify (this.response);
      // this.display = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');

      this.display = this.response.message;
      
  }

}
