import {Component, OnInit}  from 'angular2/core';
import {HTTPTestService} from './http-test.service';

@Component({
  selector:'http',
  templateUrl:'../dev/http/http.component.html',
  providers:[HTTPTestService]
})

export class HTTPTestComponent{
  getRepo:string;
  constructor(private _httpService:HTTPTestService){}
  onGet(){
    this._httpService.getRepo()
      .then(
        res=>this.getRepo = res,
        err=>alert(err)
    );
  }
	
 ngOnInit(){
	this.onGet();
 }

}
