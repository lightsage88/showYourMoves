import { Injectable } from '@angular/core';
import { Apollo, Query } from 'apollo-angular'
import gql from 'graphql-tag'
// import { Fighter } from '../models/fighter'

export interface Fighter {
  id:number;
  name:string;
  description: string;
  franchise: any;
}

export interface Response {
  fighters:Fighter[]
  roster: any
}


@Injectable({
  providedIn: 'root'
})
export class FighterService extends Query<Response> {
  // result:any
  // fighters:Fighter[]
  // documents:Fighter[]
  // constructor(private apollo: Apollo) { }

    
    document = gql`
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
}

