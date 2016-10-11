import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HTTPTestService{
  constructor(private _http:Http){}
    getRepo(){
      return this._http.get("https://api.github.com/users/DuskoPeric/repos")
      .toPromise()
      .then(res=>res.json());
    }
}
