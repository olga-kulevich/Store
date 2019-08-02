import {Component, OnDestroy, OnInit} from "@angular/core";
import {Store} from "../../../store";
import {SongsService} from "../../services/songs.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'songs-listened',
  template: `
    <div class="songs">
      <div *ngFor="let item of listened$ | async">
        {{ item.artist }}
        {{ item.track }}
      </div>
    </div>
  `
})

export class SongsListenedComponent implements OnInit, OnDestroy {

  listened$: Observable<any[]>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private songService: SongsService
){}

  ngOnInit ()
  {
    this.listened$ = this.store.select('playlist');
    this.subscription = this.songService.getPlaylist$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
