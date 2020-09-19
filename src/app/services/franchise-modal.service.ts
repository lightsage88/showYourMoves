import { Injectable, EventEmitter, Output } from '@angular/core';
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
  // public franchiseInfo = new EventEmitter<FranchiseModalInfo>()
  @Output() franchiseInfo = new EventEmitter<FranchiseModalInfo>()

  constructor(private apollo: Apollo) { }
  loading: boolean
  franchiseData: any


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
    })
    this.franchiseInfo.emit(this.franchiseData)
  }
}
