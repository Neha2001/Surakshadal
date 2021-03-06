import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LaravelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LaravelProvider {

  url:string = 'http://surakshadal.loc/';
  token:string = '';
  isProduction:boolean = true; 

  constructor(public http: Http) {
    console.log('Hello LaravelProvider Provider');
  }

  getUrl(){
    return (this.isProduction)?'http://webapp.surakshadal.com/':'http://webapp.surakshadal.loc/';
  }

  getLoginApi(){
    return this.getUrl() + 'oauth/token';
  }

  setToken(val){
    this.token = val;
  }

  getToken(){
    return this.token;
  }

  removeToken(){
    this.token = '';
  }

}
