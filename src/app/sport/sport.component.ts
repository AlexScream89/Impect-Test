import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {SportsService} from '../core/providers/sports.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit, OnDestroy {

  unsubscribe$ = new Subject();
  countries$: Observable<any>;
  sportName: string;

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
        filter(params => params && params.sport),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(params => {
        this.sportName = params.sport;
        this.countries$ = this.sportsService.getSportByName(this.sportName);
      });
  }

}
