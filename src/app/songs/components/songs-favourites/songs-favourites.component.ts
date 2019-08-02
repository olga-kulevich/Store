import {Component, OnDestroy, OnInit} from "@angular/core";
import {Store} from "../../../store";
import {Observable, Subscription} from "rxjs";
import {SongsService} from "../../services/songs.service";

@Component({
  selector: 'songs-favourites',
  template: `
    <div class="songs">
      <div *ngFor="let item of favourites$ | async">
        {{ item.artist }}
        {{ item.track }}
      </div>
    </div>
  `
})

export class SongsFavouritesComponent implements OnInit, OnDestroy {

  favourites$: Observable<any[]>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private songService: SongsService
  ){}

  ngOnInit ()
  {
    this.favourites$ = this.store.select('playlist');
    this.subscription = this.songService.getPlaylist$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
