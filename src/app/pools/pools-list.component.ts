import { Component, OnInit } from '@angular/core'; 

import { PoolsService } from './pools.service';

@Component({
	templateUrl: './app/pools/pools-list.component.html',
})

export class PoolsListComponent implements OnInit {
	title: string = "Something";
	pools: any;
	errorMessage: string;

	constructor(private _poolsService: PoolsService){
		
	}

	ngOnInit(): void{
		console.log("OnInit");
		this._poolsService.getPools()
			.subscribe(
				pools => this.pools = pools,
				error => this.errorMessage = <any>error,
		);
	}
}