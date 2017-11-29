import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  let playerName: string;
  submitName()
  {
    return this.playerName;
  }

  ngOnInit() {
  }

}
