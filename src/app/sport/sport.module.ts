import {NgModule} from '@angular/core';
import {SportComponent} from './sport.component';
import {SportRoutingModule} from './sport-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [SportComponent],
  imports: [
    CommonModule,
    SportRoutingModule,
    MatExpansionModule
  ]
})
export class SportModule {}
