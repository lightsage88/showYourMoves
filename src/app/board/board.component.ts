import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  fighters:any[]
  loading:Boolean = true
  error:any
  constructor(
      private apollo: Apollo,
    ) { }

  ngOnInit(): void {
    this.apollo
    .watchQuery({
      query: gql`
        {
          roster {
            id
            name
            description
            franchise {
              id
              name
              games {
                id
                name
                releaseYear
              }
            }
          }
        }
      `
    })
    .valueChanges.subscribe(result => {
      console.log('these are the results ', result)
      this.fighters = result.data.roster
      this.loading = result.loading
      this.error = result.error
    })
  }

}
