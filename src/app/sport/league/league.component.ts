import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SportsService} from '../../core/providers/sports.service';
import {filter, map, takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit, OnDestroy {

  unsubscribe$ = new Subject();
  events$: Observable<any>;
  country$: Observable<any>;
  seasons$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private sportsService: SportsService
  ) { }

  ngOnInit(): void {
    this.getRouteParams();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getRouteParams(): void {
    this.route.params
      .pipe(
        filter(params => params && params.sport && params.leagueId),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(params => {
        this.events$ = this.sportsService.getLeagueEventsById(params.leagueId);
        this.country$ = this.sportsService.getSportByName(params.sport)
          .pipe(map(countries => {
            return countries.filter((country: any) => country.idLeague === params.leagueId)[0];
          }));
        this.seasons$ = this.sportsService.getSeasonsById(params.leagueId);
      });
  }

}
