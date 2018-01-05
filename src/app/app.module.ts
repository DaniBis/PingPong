import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ScoreTableComponent } from './score-table/score-table.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddGamesComponent } from './add-games/add-games.component';
import { DisplayGamesComponent } from './display-games/display-games.component';

import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ScoreTableComponent,
    AddPlayerComponent,
    AddGamesComponent,
    DisplayGamesComponent,
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
