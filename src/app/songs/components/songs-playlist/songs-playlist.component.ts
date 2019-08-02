import {Component, OnInit, OnDestroy} from "@angular/core";
import { Store } from "../../../store";
import {SongsService} from "../../services/songs.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'songs-playlist',
  template: `
    <div class="songs">
      <div *ngFor="let item of playlist$ | async">
        {{ item.artist }}
        {{ item.track }}
      </div>
    </div>
  `
})

export class SongsPlaylistComponent implements OnInit, OnDestroy{

  playlist$: Observable<any[]>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private songService: SongsService
  ){}

  ngOnInit ()
  {
    this.playlist$ = this.store.select('playlist');
    this.subscription = this.songService.getPlaylist$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
