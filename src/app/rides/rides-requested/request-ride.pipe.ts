import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'requestRide'
})
export class RequestRidePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
