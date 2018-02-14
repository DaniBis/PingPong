import { Component,Input, OnChanges, AfterViewInit } from '@angular/core';
import { AddPlayerComponent } from './../add-player/add-player.component';

@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.component.html',
  styleUrls: ['./add-games.component.css']
})

export class AddGamesComponent implements OnChanges, AfterViewInit{
_whatShouldBe : string [];
@Input("results") results: string[];
@Input("isLoading") isLoading = true;
loading  = true;

ngOnChanges() {
this._whatShouldBe = this.results;
console.log(this._whatShouldBe + " another change");
	}

getResults() {
	this.loading = false;
}

ngAfterViewInit() {
  this.getResults();
	}
}
