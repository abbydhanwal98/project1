import {Component} from '@angular/core';

@Component({
	selector:'app-server',
	templateUrl:'./server.component.html',
	styles:[`
	.online{color:white}
	`]
})
export class ServerComponent{
	serverId: number =10;
	serverStatus: string ='Offlinee';
	color: string='';

	constructor(){
		this.serverStatus=Math.random() > 0.5? 'Online':'Offline';
	}

	getServerStatus(){
		return this.serverStatus;
	}
	getColor(){
		if(this.serverStatus=='Online'){
			this.color='green';
		}else if(this.serverStatus=='Offline'){
			this.color='red';
		}else{

		}
		return this.color;
	}
	
}