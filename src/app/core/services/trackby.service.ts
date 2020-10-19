import { Injectable } from '@angular/core';

@Injectable({
  providedIn:"root"
})
export class TrackByService {

  trackby(index: number, object: any) {
    return index;
  }

}
