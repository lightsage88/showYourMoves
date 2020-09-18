import { Injectable, EventEmitter } from '@angular/core';

class FighterName {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {

  public ClickedName = new EventEmitter<Event>()
  constructor() { }

  public handleClickValue(e:Event): void {
    if(console && console.log) {
      console.log('handleClickValue happening', name)
    }
    // const value = (e.target as HTMLInputElement).textContent;
    // console.log(value)

    this.ClickedName.emit(e)
  }
}
