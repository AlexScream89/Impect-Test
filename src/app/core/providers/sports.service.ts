import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pluck} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http: HttpClient) { }

  getSports() {
    return this.http.get(`${environment.apiUrl}/all_sports.php`)
      .pipe(pluck('sports'));
  }

  getSportByName(name: string) {
    return this.http.get(`${environment.apiUrl}/search_all_leagues.php?s=${name}`);
  }
}
