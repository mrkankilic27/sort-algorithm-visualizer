import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortSelectService {

constructor() { }

@Output() bChange = new EventEmitter<number>();
@Output() sChange = new EventEmitter<number>();
@Output() Algorithm = new EventEmitter<string>();

boxChange(boxy:any) {
  this.bChange.emit(boxy);
}

speedChange(speedy:any){
  this.sChange.emit(speedy)
}

algoChange(algorithm:string){
  this.Algorithm.emit(algorithm)
}




}
