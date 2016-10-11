System.register(['angular2/core', './http-test.service'], function(exports_1, context_1) {
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
    var core_1, http_test_service_1;
    var HTTPTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            HTTPTestComponent = (function () {
                function HTTPTestComponent(_httpService) {
                    this._httpService = _httpService;
                }
                HTTPTestComponent.prototype.onGet = function () {
                    var _this = this;
                    this._httpService.getRepo()
                        .then(function (res) { return _this.getRepo = res; }, function (err) { return alert(err); });
                };
                HTTPTestComponent.prototype.ngOnInit = function () {
                    this.onGet();
                };
                HTTPTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http',
                        templateUrl: '../dev/http/http.component.html',
                        providers: [http_test_service_1.HTTPTestService]
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HTTPTestService])
                ], HTTPTestComponent);
                return HTTPTestComponent;
            }());
            exports_1("HTTPTestComponent", HTTPTestComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAvaHR0cC10ZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUVFLDJCQUFvQixZQUE0QjtvQkFBNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO2dCQUFFLENBQUM7Z0JBQ25ELGlDQUFLLEdBQUw7b0JBQUEsaUJBTUM7b0JBTEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7eUJBQ3hCLElBQUksQ0FDSCxVQUFBLEdBQUcsSUFBRSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFsQixDQUFrQixFQUN2QixVQUFBLEdBQUcsSUFBRSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLENBQ2xCLENBQUM7Z0JBQ0osQ0FBQztnQkFFRixvQ0FBUSxHQUFSO29CQUNBLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixDQUFDO2dCQW5CRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBQyxNQUFNO3dCQUNmLFdBQVcsRUFBQyxpQ0FBaUM7d0JBQzdDLFNBQVMsRUFBQyxDQUFDLG1DQUFlLENBQUM7cUJBQzVCLENBQUM7O3FDQUFBO2dCQWlCRix3QkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQsaURBZUMsQ0FBQSIsImZpbGUiOiJodHRwL2h0dHAtdGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSAgZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0hUVFBUZXN0U2VydmljZX0gZnJvbSAnLi9odHRwLXRlc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjonaHR0cCcsXG4gIHRlbXBsYXRlVXJsOicuLi9kZXYvaHR0cC9odHRwLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOltIVFRQVGVzdFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgSFRUUFRlc3RDb21wb25lbnR7XG4gIGdldFJlcG86c3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTpIVFRQVGVzdFNlcnZpY2Upe31cbiAgb25HZXQoKXtcbiAgICB0aGlzLl9odHRwU2VydmljZS5nZXRSZXBvKClcbiAgICAgIC50aGVuKFxuICAgICAgICByZXM9PnRoaXMuZ2V0UmVwbyA9IHJlcyxcbiAgICAgICAgZXJyPT5hbGVydChlcnIpXG4gICAgKTtcbiAgfVxuXHRcbiBuZ09uSW5pdCgpe1xuXHR0aGlzLm9uR2V0KCk7XG4gfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
