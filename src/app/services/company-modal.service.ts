import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular'
import { BehaviorSubject, Subscription } from 'rxjs'
import gql from 'graphql-tag'

const companyQuery = gql`query oneCompany($id: ID!) {
  oneCompany(id: $id) {
    id
    name
    foundingYear
    wikiID
    description
    franchises {
      name
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class CompanyModalService {
  constructor(private apollo: Apollo) { }
  loading: boolean
  companyData: any

  //Observable navitem source
  private _dataCandy = new BehaviorSubject<any>(0)

  //Observable navItem stream
  dataCandy$ = this._dataCandy.asObservable()

  getCompanyInfo(id:any) {
    console.log('really triyn ghere')
     this.apollo.query({
      query: companyQuery,
      variables: {
        id: Number(id)
      }
    })
    .subscribe(({data, loading}) => {
      console.log('some data', data)
      this.loading = loading
      this.companyData = data
      this._dataCandy.next(data)
    })
  }
}