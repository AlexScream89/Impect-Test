import { Component, OnInit } from '@angular/core';
import {SportsService} from '../core/providers/sports.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sports$: Observable<any>;

  constructor(private sportsService: SportsService) {
    this.sports$ = this.sportsService.getSports();
  }

  ngOnInit(): void {}

  getImageLink(name: string): string {
    return `https://www.thesportsdb.com/images/icons/${name}.png`;
  }

}
