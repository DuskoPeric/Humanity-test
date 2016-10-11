import {Pipe, PipeTransform} from 'angular2/core';
@Pipe({
    name: 'companyFilter'
})
export class CompanyFilterPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
       let filter = args[0].toLocaleLowerCase();
       return filter ? value.filter(job=> job.Company.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}