import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';

import { PoolsService } from './pools.service';

@Component({
	templateUrl: './app/pools/pools-detail.component.html',
})

export class PoolsDetailComponent implements OnInit{
	test: string = "testThing";
	pool: any;
	errorMessage: string;
	selectedLines = [];
	selectedStatus: Array<boolean> = [];
	totalLines: number = 0;
	
	private betAmounts = [2,3,42131];
	betValue = this.betAmounts[0]

	constructor(private _poolsService: PoolsService, private _route: ActivatedRoute, private _router: Router){

	}

	ngOnInit(): void{
		this._route.params.subscribe(
			params => {
				let id = +params['id'];
				this.getPool(id);
			}
		);
	}

	getPool(id: number){
		return this._poolsService.getPool(id)
			.subscribe(
				pool => this.pool = pool,
				error => this.errorMessage = <any>error
			);
	}

	toggleSelect(id:number, leg:string){
		let legNumber = this.selectedLines[+leg-1]; //convert to int and adjust to array
		if(legNumber){
			for(var i = 0; i < this.selectedLines.length; i++){
				if( this.selectedLines[i].leg == legNumber.leg ){
					legNumber.ids.push(id);
				}
				
			}

		}
		else{
			this.selectedLines.push({leg, 'ids': [id]});
		}
		this.calculateBet(this.selectedLines);
	}
	onBack(): void{
		this._router.navigate(['/pools']);
	}

	calculateBet(selections){
		let totalLines = 0;
		for(var i = 0; i < selections.length; i++){
			totalLines += selections[i].ids.length;
		}
		totalLines *= selections.length;
		this.totalLines = totalLines;
	}
}