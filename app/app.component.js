System.register(['angular2/core', 'angular2/router', './home/home.component', './github/github.component', './experience/experience.component', './http/http-test.component'], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, github_component_1, experience_component_1, http_test_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (github_component_1_1) {
                github_component_1 = github_component_1_1;
            },
            function (experience_component_1_1) {
                experience_component_1 = experience_component_1_1;
            },
            function (http_test_component_1_1) {
                http_test_component_1 = http_test_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: '../dev/app.component.html',
                        directives: [http_test_component_1.HTTPTestComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: home_component_1.HomeComponent, name: 'Home' },
                        { path: '/github', component: github_component_1.GithubComponent, name: 'Github' },
                        { path: '/experience', component: experience_component_1.ExperienceComponent, name: 'Experience' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFaRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxLQUFLO3dCQUNqQixXQUFXLEVBQUUsMkJBQTJCO3dCQUN4QyxVQUFVLEVBQUMsQ0FBQyx1Q0FBaUIsRUFBQywwQkFBaUIsQ0FBQztxQkFDakQsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNYLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO3dCQUNyRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTt3QkFDL0QsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO3FCQUM1RSxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQge0dpdGh1YkNvbXBvbmVudH0gZnJvbSAnLi9naXRodWIvZ2l0aHViLmNvbXBvbmVudCc7XG5pbXBvcnQge0V4cGVyaWVuY2VDb21wb25lbnR9IGZyb20gJy4vZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudCc7XG5pbXBvcnQge0hUVFBUZXN0Q29tcG9uZW50fSBmcm9tICcuL2h0dHAvaHR0cC10ZXN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgdGVtcGxhdGVVcmw6ICcuLi9kZXYvYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczpbSFRUUFRlc3RDb21wb25lbnQsUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgbmFtZTogJ0hvbWUnIH0sXG4gIHsgcGF0aDogJy9naXRodWInLCBjb21wb25lbnQ6IEdpdGh1YkNvbXBvbmVudCwgbmFtZTogJ0dpdGh1YicgfSxcbiAgeyBwYXRoOiAnL2V4cGVyaWVuY2UnLCBjb21wb25lbnQ6IEV4cGVyaWVuY2VDb21wb25lbnQsIG5hbWU6ICdFeHBlcmllbmNlJyB9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
