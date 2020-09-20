import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs'
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'

export interface FranchiseModalInfo {
  id:number;
  name:string;
  games: any;
}

const franchiseQuery = gql`query oneFranchise($id: ID!) {
  oneFranchise(id: $id) {
    id
    name
    games {
      name
    }
  } 
}
`;


@Injectable({
  providedIn: 'root'
})
export class FranchiseModalService {
  constructor(private apollo: Apollo) { }
  loading: boolean
  franchiseData: any
  private _franchiseCandy = new BehaviorSubject<any>(0)
  franchiseCandy$ = this._franchiseCandy.asObservable()
  getFranchiseInfo(id:any) {
    console.log('really triyn ghere')
     this.apollo.query({
      query: franchiseQuery,
      variables: {
        id: Number(id)
      }
    })
    .subscribe(({data, loading}) => {
      console.log('some data', data)
      this.loading = loading
      this.franchiseData = data
      this._franchiseCandy.next(data)
    })
  }
}
