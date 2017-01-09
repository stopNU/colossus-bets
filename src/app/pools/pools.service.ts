import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class PoolsService{
	private _url = 'https://colossusdevtest.herokuapp.com/api/';
	constructor(private _http: Http){}

	getPools(): Observable<Response>{
		console.log("getPools called");
		return this._http.get(this._url + "/pools.json")
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	getPool(id: number): Observable<Response>{
		console.log("getPool called");
		return this._http.get(this._url + "/pools/" + id + ".json")
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	private handleError(error: Response){
		return Observable.throw(error.json().error || 'Server error');
	}
}