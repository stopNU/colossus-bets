import { Component, Input } from '@angular/core'; 

@Component({
	selector: 'pools-info',
	templateUrl: './app/pools/pools-info.component.html',
})

export class PoolsInfoComponent {
	@Input() info: Object;
	@Input() optionalGroupName: string = '';
}