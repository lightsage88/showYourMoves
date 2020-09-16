import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular'
import { Observable } from 'rxjs'
import { Fighter, FighterService } from './services/fighter.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'showYourMoves';
  parentData:any;
  fighters:Observable<Fighter[]>
  result:any
  loading:Boolean = true
  error:any
  event:Event
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
    console.log('glee is a feeling you get', this.event)
  }
}
