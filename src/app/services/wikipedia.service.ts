import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  wikiDescriptionUrl: string = "http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&prop=extracts&explaintext=true&pageids="
  constructor(private http: HttpClient) { }

  getWikiData(dataCode: string): Observable<any> {
    return this.http.get<any>(`https://cors-anywhere.herokuapp.com/${this.wikiDescriptionUrl}${dataCode}`)
  }
}
