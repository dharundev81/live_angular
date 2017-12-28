import { Component, OnInit } from '@angular/core';

import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  public employee = [];

  constructor(private _employeeservices: EmployeeService ) { }

  ngOnInit() {
    // this.employee = this._employeeservices.getEmployee();
    this._employeeservices.getEmployee()
      .subscribe(resEmpDetails => this.employee = resEmpDetails);
  }

}
