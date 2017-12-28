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

  user: AppString;

  constructor(private _employeeservices: EmployeeService ) { 

    this.user = new AppString();
  }

  ngOnInit() {

    // this.employee = this._employeeservices.getEmployee();
    
  }

  id(id:any){
    console.log(id);
    this._employeeservices.postEmployee(id)
      .subscribe(resEmpDetails => this.employee = resEmpDetails);
      console.log(this.employee);
  }

}
