import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    results: string[];
    	isLoading = true;
    	constructor() {}

    	onResultsEmitted(event) {
    		this.results = event;
        console.log(this.results + "on the parents");
    	}
}
