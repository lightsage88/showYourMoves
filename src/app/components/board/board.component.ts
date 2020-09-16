import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Apollo } from 'apollo-angular'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Fighter, FighterService } from '../../services/fighter.service'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Output() dataDump:EventEmitter<any> = new EventEmitter()
  fighters:Observable<Fighter[]>
  result:any
  loading:Boolean = true
  error:any
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
      this.dataDump.emit(result.data.roster)
    })
    
    
    // this.apollo
    // .watchQuery({
    //   query: gql`
    //     {
    //       roster {
    //         id
    //         name
    //         description
    //         franchise {
    //           id
    //           name
    //           games {
    //             id
    //             name
    //             releaseYear
    //           }
    //         }
    //       }
    //     }
    //   `
    // })
    // .valueChanges.subscribe(result => {
    //   console.log('these are the results ', result)
    //   this.result = result
    //   this.fighters = this.result.data.roster
    //   this.loading = this.result.loading
    //   this.error = this.result.error
    // })
  }

}
