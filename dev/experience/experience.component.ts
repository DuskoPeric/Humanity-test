import {Component, View} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {CompanyFilterPipe} from './companyFilter.pipe';

@Component({
  selector:'experience',
  providers:[],
   directives:[ROUTER_DIRECTIVES],
  templateUrl:'../dev/experience/experience.component.html',
  pipes: [CompanyFilterPipe]
})
export class ExperienceComponent{
	public jobs = [
		{ period: 'March 2015- Present', Company: "Perić development", position:"Owner" },
		{ period: 'October 2014 – Present', Company: "Bgsvetionik", position:"Senior Front End Developer" },
		{ period: 'January 2011 – Present', Company: "teretane.net", position:"Co Owner" },
		{ period: 'August 2013 – October 2014', Company: "Gvisp1", position:"Web Developer" }
	  ];
}
