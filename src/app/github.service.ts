import { Injectable } from '@angular/core';

import {Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Config } from './config/config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubService {

  private username: string;
  private client_id: string;
  private client_secret: string;

  constructor(private _http: Http) {
    this.username = 'takayasu';
    const config = new Config();

    this.client_id = config.getCliemtId();
    this.client_secret = config.getClientSecret();

    console.log('Github Service ready ..');
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username
      + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret )
      .map(res => res.json()).catch(this.httpError);
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username
      + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret )
      .map(res => res.json()).catch(this.httpError);
  }

  updateUser( username: string ) {
    this.username = username;
  }

  httpError( error: any ): any {
    return Observable.throw('');
  }

}
