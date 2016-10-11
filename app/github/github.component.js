System.register(["angular2/core", "angular2/router", '../http/http-test.component'], function(exports_1, context_1) {
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
    var core_1, router_1, http_test_component_1;
    var GithubComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_test_component_1_1) {
                http_test_component_1 = http_test_component_1_1;
            }],
        execute: function() {
            GithubComponent = (function () {
                function GithubComponent() {
                }
                GithubComponent = __decorate([
                    core_1.Component({
                        selector: 'github',
                        providers: [],
                        directives: [http_test_component_1.HTTPTestComponent, router_1.ROUTER_DIRECTIVES],
                        templateUrl: '../dev/github/github.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], GithubComponent);
                return GithubComponent;
            }());
            exports_1("GithubComponent", GithubComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9naXRodWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFSRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBQyxRQUFRO3dCQUNqQixTQUFTLEVBQUMsRUFBRTt3QkFDWCxVQUFVLEVBQUMsQ0FBQyx1Q0FBaUIsRUFBQywwQkFBaUIsQ0FBQzt3QkFDakQsV0FBVyxFQUFDLHFDQUFxQztxQkFDbEQsQ0FBQzs7bUNBQUE7Z0JBR0Ysc0JBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELDZDQUVDLENBQUEiLCJmaWxlIjoiZ2l0aHViL2dpdGh1Yi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7SFRUUFRlc3RDb21wb25lbnR9IGZyb20gJy4uL2h0dHAvaHR0cC10ZXN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjonZ2l0aHViJyxcbiAgcHJvdmlkZXJzOltdLFxuICAgZGlyZWN0aXZlczpbSFRUUFRlc3RDb21wb25lbnQsUk9VVEVSX0RJUkVDVElWRVNdLFxuICB0ZW1wbGF0ZVVybDonLi4vZGV2L2dpdGh1Yi9naXRodWIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEdpdGh1YkNvbXBvbmVudHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
