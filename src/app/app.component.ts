import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Apollo } from 'apollo-angular'
import { Observable } from 'rxjs'
import { Fighter, FighterService } from './services/fighter.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Output() searchStringUpdating = new EventEmitter<Event>()
  title = 'showYourMoves';
  parentData:any;
  fighters:Observable<Fighter[]>
  result:any
  loading:Boolean = true
  error:any
  event:Event
  searchString:any
  constructor(
      private apollo: Apollo,
      private fighterService: FighterService
    ) { }

  ngOnInit(): void {
    this.fighterService.watch()
    .valueChanges
    .subscribe(result => { 
      console.log(result)
      this.fighters = result.data.roster
      this.loading = false
      this.result = result
      console.log(this.fighters)
    })
  }

  theNextPart(event:Event) {
    this.event = event
    this.searchString = (this.event.target as HTMLInputElement).value
    console.log('glee is a feeling you get', this.searchString)
    this.searchStringUpdating.emit(this.searchString)
    
  }
}
