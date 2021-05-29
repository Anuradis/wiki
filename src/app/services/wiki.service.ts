import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, share} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) { }
  /**
   * Returns wiki ten best searched results
   * param searchedPhrase
   */
  getTenBestSearchedWikiResults(searchedPhrase): Observable<any> {
    return this.http.get<any>(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=%22${searchedPhrase}%22&srlimit=10`).pipe(catchError(this.handleError));

  }

  /**
   * Handles any request error
   */
  private handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

}
