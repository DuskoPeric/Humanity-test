import {Component, View} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {HTTPTestComponent} from '../http/http-test.component';

@Component({
  selector:'github',
  providers:[],
   directives:[HTTPTestComponent,ROUTER_DIRECTIVES],
  templateUrl:'../dev/github/github.component.html'
})
export class GithubComponent{

}
