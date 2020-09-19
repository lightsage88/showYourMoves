import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular'
import { Subscription } from 'rxjs'
import gql from 'graphql-tag'

const companyQuery = gql`query oneCompany($id: ID!) {
  oneCompany(id: $id) {
    id
    name
    foundingYear
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
    })
  }
}

//
    // import { Injectable } from '@angular/core';
    // import { Apollo, Query } from 'apollo-angular'
    // import gql from 'graphql-tag'

    // // export interface Fighter {
    // //   id:number;
    // //   name:string;
    // //   description: string;
    // //   franchise: any;
    // //   company: any;
    // // }
    // export interface Company {

    // }

    // export interface Response  {
    //   // fighters:Fighter[]
    //   // roster: any
    //   company: Company
    // }

    // @Injectable({
    //   providedIn: 'root'
    // })
    // export class CompanyModalService extends Query<Response> {

    //   document = gql`
    //   {
    //   oneCompany($id: 1) {
    //     id
    //     name
    //     foundingYear
    //     description
    //     franchises {
    //       name
    //     }
    //   }
    // }
    // `  
    // }


