import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})

export class AddPlayerComponent{

  nameModel:string = "";
  @Input() listOfNames = [];

  @Output() ResultsEmitted = new EventEmitter<string[]>();
  onSubmit() {
    this.listOfNames.push(this.nameModel)
    this.nameModel = '';
    this.ResultsEmitted.emit(this.listOfNames);
    console.log(this.listOfNames);
  }
}
