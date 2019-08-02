import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Store } from '../../store';
import {map, tap} from "rxjs/operators";

@Injectable()
export class SongsService {
  getPlaylist$ = this.http
    .get('http://localhost:3000/playlist')
    .pipe(
      map((res) => res),
      tap(next => this.store.set('playlist', next))
    );

  constructor(
    private http: HttpClient,
    private store: Store
  ){}

}
