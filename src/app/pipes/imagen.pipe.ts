import { Pipe, PipeTransform } from '@angular/core';
import { ApiServe } from '../services/urlApiService';


const URL = ApiServe.url;
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, userId?: string): string {
    return `${URL}/posts/imagen/${userId}/${img}`;
  }

}
