import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'typepipe',
  
})

export class PublicTypePipe implements PipeTransform{
   /* transform(value:string,args:string):string{
        if(value=="public")
          return value;
    }*/
    transform(items: any[]): any {
        return items.filter(item => item.type.indexOf('public') !== -1)
    }
}