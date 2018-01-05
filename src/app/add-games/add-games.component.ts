import { Component,Input, OnChanges, AfterViewInit } from '@angular/core';
import { AddPlayerComponent } from './../add-player/add-player.component';

@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.component.html',
  styleUrls: ['./add-games.component.css']
})
export class AddGamesComponent implements OnChanges, AfterViewInit{

@Input("results") results: string[];

ngOnChanges() {

	}
ngAfterViewInit() {
  console.log(this.canbe +"we changed");
	}
}
