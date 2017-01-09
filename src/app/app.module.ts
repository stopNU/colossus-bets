import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './shared/app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { PoolsListComponent }  from './pools/pools-list.component';
import { PoolsDetailComponent }  from './pools/pools-detail.component';
import { PoolsInfoComponent }  from './pools/pools-info.component';
import { PoolsService } from './pools/pools.service';

@NgModule({
  imports: [
    BrowserModule, 
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PoolsListComponent,
    PoolsInfoComponent, 
    PoolsDetailComponent,
  ],
  providers: [ PoolsService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
