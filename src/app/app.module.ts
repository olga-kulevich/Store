import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongModule } from './songs/songs.module';

import { Store } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  imports: [
    BrowserModule,
    SongModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
