import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {WikiAPI} from '../interfaces/wiki-api';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) { }
  /**
   * Returns wiki ten best searched results
   * param searchedPhrase
   */
  getTenBestWikiResults(searchedPhrase): Observable<WikiAPI> {
    return this.http.get<WikiAPI>(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=%22${searchedPhrase}%22&srlimit=10`).pipe(catchError(this.handleError));

  }

  /**
   * Handles request error with CORS Error;
   */
  private handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      if (error.status === 403) {
        console.error(
          `Backend returned code ${error.status}, ` + `body was: ${error.error}`
        );
        window.open('https://cors-anywhere.herokuapp.com/corsdemo', '_blank');
        console.error(`This demo of CORS Anywhere should only be used for development purpose. This demo of CORS Anywhere should only be used for development purpose`);
        console.error(`To access API, you have to request temporary  access to the demo server`);
        console.error(`https://cors-anywhere.herokuapp.com/corsdemo`);
      }
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
