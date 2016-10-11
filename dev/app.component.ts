import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {GithubComponent} from './github/github.component';
import {ExperienceComponent} from './experience/experience.component';
import {HTTPTestComponent} from './http/http-test.component';

@Component({
    selector: 'app',
  templateUrl: '../dev/app.component.html',
  directives:[HTTPTestComponent,ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeComponent, name: 'Home' },
  { path: '/github', component: GithubComponent, name: 'Github' },
  { path: '/experience', component: ExperienceComponent, name: 'Experience' }
])
export class AppComponent {

}
