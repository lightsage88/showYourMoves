import { Injectable } from '@angular/core';
import { Apollo, Query } from 'apollo-angular'
import gql from 'graphql-tag'
// import { Fighter } from '../models/fighter'

export interface Fighter {
  id:number;
  name:string;
  description: string;
  franchise: any;
  company: any;
}
 
export interface Response {
  fighters:Fighter[]
  roster: any
}


@Injectable({
  providedIn: 'root'
})
export class FighterService extends Query<Response> {
    document = gql`
        {
          roster {
            id
            name
            description
            image
            franchise {
              id
              name
              fighters {
                id
                name                
              }
              games {
                id
                name
                releaseYear
              }
              company {
                id
                name
              }
            }
          }
        }
      `  
}

