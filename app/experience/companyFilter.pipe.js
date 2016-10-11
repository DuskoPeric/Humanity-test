System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var CompanyFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CompanyFilterPipe = (function () {
                function CompanyFilterPipe() {
                }
                CompanyFilterPipe.prototype.transform = function (value, args) {
                    var filter = args[0].toLocaleLowerCase();
                    return filter ? value.filter(function (job) { return job.Company.toLocaleLowerCase().indexOf(filter) != -1; }) : value;
                };
                CompanyFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'companyFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CompanyFilterPipe);
                return CompanyFilterPipe;
            }());
            exports_1("CompanyFilterPipe", CompanyFilterPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UvY29tcGFueUZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBQUE7Z0JBS0EsQ0FBQztnQkFKRyxxQ0FBUyxHQUFULFVBQVUsS0FBVSxFQUFFLElBQWM7b0JBQ2pDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUN6QyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUcsT0FBQSxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFyRCxDQUFxRCxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNyRyxDQUFDO2dCQVBMO29CQUFDLFdBQUksQ0FBQzt3QkFDRixJQUFJLEVBQUUsZUFBZTtxQkFDeEIsQ0FBQzs7cUNBQUE7Z0JBTUYsd0JBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELGlEQUtDLENBQUEiLCJmaWxlIjoiZXhwZXJpZW5jZS9jb21wYW55RmlsdGVyLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnY29tcGFueUZpbHRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBhbnlGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJnczogc3RyaW5nW10pOiBhbnkge1xyXG4gICAgICAgbGV0IGZpbHRlciA9IGFyZ3NbMF0udG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgIHJldHVybiBmaWx0ZXIgPyB2YWx1ZS5maWx0ZXIoam9iPT4gam9iLkNvbXBhbnkudG9Mb2NhbGVMb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgIT0gLTEpIDogdmFsdWU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
