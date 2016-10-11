System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var HTTPTestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            HTTPTestService = (function () {
                function HTTPTestService(_http) {
                    this._http = _http;
                }
                HTTPTestService.prototype.getRepo = function () {
                    return this._http.get("https://api.github.com/users/DuskoPeric/repos")
                        .toPromise()
                        .then(function (res) { return res.json(); });
                };
                HTTPTestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPTestService);
                return HTTPTestService;
            }());
            exports_1("HTTPTestService", HTTPTestService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAvaHR0cC10ZXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUNFLHlCQUFvQixLQUFVO29CQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7Z0JBQUUsQ0FBQztnQkFDL0IsaUNBQU8sR0FBUDtvQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUM7eUJBQ3JFLFNBQVMsRUFBRTt5QkFDWCxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBUEw7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBUWIsc0JBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELDZDQU9DLENBQUEiLCJmaWxlIjoiaHR0cC9odHRwLXRlc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIVFRQVGVzdFNlcnZpY2V7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6SHR0cCl7fVxuICAgIGdldFJlcG8oKXtcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvRHVza29QZXJpYy9yZXBvc1wiKVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbihyZXM9PnJlcy5qc29uKCkpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
