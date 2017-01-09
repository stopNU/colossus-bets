import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PoolsListComponent } from '../pools/pools-list.component';
import { PoolsDetailComponent } from '../pools/pools-detail.component';

@NgModule({
  imports: [
  	RouterModule.forRoot([
  		{ path: 'pools', component: PoolsListComponent },
  		{ path: 'pools/:id', component: PoolsDetailComponent }, 
  		{ path: '', redirectTo: 'pools', pathMatch: 'full' },
  	]),
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
