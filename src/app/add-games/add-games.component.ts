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
_whatShouldBe = this.results;
ngOnChanges() {
console.log(this._whatShouldBe + " another change");
	}
ngAfterViewInit() {
  console.log(this.results + "I'm now in add games");
	}
}
