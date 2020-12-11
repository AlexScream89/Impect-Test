import {NgModule} from '@angular/core';
import {SportComponent} from './sport.component';
import {SportRoutingModule} from './sport-routing.module';

@NgModule({
  declarations: [SportComponent],
  imports: [SportRoutingModule]
})
export class SportModule {}
