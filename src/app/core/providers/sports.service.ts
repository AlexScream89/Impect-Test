import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pluck, shareReplay} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http: HttpClient) { }

  getSports(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/all_sports.php`)
      .pipe(
        pluck('sports'),
        shareReplay()
      );
  }

  getSportByName(name: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/search_all_leagues.php?s=${name}`)
      .pipe(
        pluck('countrys'),
        shareReplay()
      );
  }

  getLeagueEventsById(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/eventsnextleague.php?id=${id}`)
      .pipe(
        pluck('events'),
        shareReplay()
      );
  }

  getSeasonsById(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/search_all_seasons.php?id=${id}`)
      .pipe(
        pluck('seasons'),
        shareReplay()
      );
  }
}
