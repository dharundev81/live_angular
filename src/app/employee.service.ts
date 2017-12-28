import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http/src/http';
import {Http, Response}from '@angular/http';
// import { Response } from '_debugger';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

  public url: string = "http://192.168.1.111/spellbee/json/api.json";
  public url1: string = "http://spellbeeinternational.com/spellbeeapps/apicall/login";

  constructor( private http: Http) { }

  getEmployee(){
    return this.http.get(this.url)
      .map((response :Response) => response.json());
  }

  postEmployee(id:string){
    return this.http.post(this.url1, JSON.stringify({"spell_bee_id":id,"type":'quiz'}))
      .map((response1 : Response) => response1.json());
  }

}
