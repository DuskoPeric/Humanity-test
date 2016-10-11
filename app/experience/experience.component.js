System.register(["angular2/core", "angular2/router", './companyFilter.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, companyFilter_pipe_1;
    var ExperienceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (companyFilter_pipe_1_1) {
                companyFilter_pipe_1 = companyFilter_pipe_1_1;
            }],
        execute: function() {
            ExperienceComponent = (function () {
                function ExperienceComponent() {
                    this.jobs = [
                        { period: 'March 2015- Present', Company: "Perić development", position: "Owner" },
                        { period: 'October 2014 – Present', Company: "Bgsvetionik", position: "Senior Front End Developer" },
                        { period: 'January 2011 – Present', Company: "teretane.net", position: "Co Owner" },
                        { period: 'August 2013 – October 2014', Company: "Gvisp1", position: "Web Developer" }
                    ];
                }
                ExperienceComponent = __decorate([
                    core_1.Component({
                        selector: 'experience',
                        providers: [],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: '../dev/experience/experience.component.html',
                        pipes: [companyFilter_pipe_1.CompanyFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExperienceComponent);
                return ExperienceComponent;
            }());
            exports_1("ExperienceComponent", ExperienceComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBQTtvQkFDUSxTQUFJLEdBQUc7d0JBQ2IsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBQyxPQUFPLEVBQUU7d0JBQ2pGLEVBQUUsTUFBTSxFQUFFLHdCQUF3QixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFDLDRCQUE0QixFQUFFO3dCQUNuRyxFQUFFLE1BQU0sRUFBRSx3QkFBd0IsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBQyxVQUFVLEVBQUU7d0JBQ2xGLEVBQUUsTUFBTSxFQUFFLDRCQUE0QixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLGVBQWUsRUFBRTtxQkFDbkYsQ0FBQztnQkFDTCxDQUFDO2dCQWREO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFDLFlBQVk7d0JBQ3JCLFNBQVMsRUFBQyxFQUFFO3dCQUNYLFVBQVUsRUFBQyxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixXQUFXLEVBQUMsNkNBQTZDO3dCQUN6RCxLQUFLLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztxQkFDM0IsQ0FBQzs7dUNBQUE7Z0JBUUYsMEJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELHFEQU9DLENBQUEiLCJmaWxlIjoiZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtDb21wYW55RmlsdGVyUGlwZX0gZnJvbSAnLi9jb21wYW55RmlsdGVyLnBpcGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2V4cGVyaWVuY2UnLFxuICBwcm92aWRlcnM6W10sXG4gICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFU10sXG4gIHRlbXBsYXRlVXJsOicuLi9kZXYvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5odG1sJyxcbiAgcGlwZXM6IFtDb21wYW55RmlsdGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgRXhwZXJpZW5jZUNvbXBvbmVudHtcblx0cHVibGljIGpvYnMgPSBbXG5cdFx0eyBwZXJpb2Q6ICdNYXJjaCAyMDE1LSBQcmVzZW50JywgQ29tcGFueTogXCJQZXJpxIcgZGV2ZWxvcG1lbnRcIiwgcG9zaXRpb246XCJPd25lclwiIH0sXG5cdFx0eyBwZXJpb2Q6ICdPY3RvYmVyIDIwMTQg4oCTIFByZXNlbnQnLCBDb21wYW55OiBcIkJnc3ZldGlvbmlrXCIsIHBvc2l0aW9uOlwiU2VuaW9yIEZyb250IEVuZCBEZXZlbG9wZXJcIiB9LFxuXHRcdHsgcGVyaW9kOiAnSmFudWFyeSAyMDExIOKAkyBQcmVzZW50JywgQ29tcGFueTogXCJ0ZXJldGFuZS5uZXRcIiwgcG9zaXRpb246XCJDbyBPd25lclwiIH0sXG5cdFx0eyBwZXJpb2Q6ICdBdWd1c3QgMjAxMyDigJMgT2N0b2JlciAyMDE0JywgQ29tcGFueTogXCJHdmlzcDFcIiwgcG9zaXRpb246XCJXZWIgRGV2ZWxvcGVyXCIgfVxuXHQgIF07XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
