import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Evento {
  id: number;
  title: string;
  responses: number;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<Evento[]> {
    return this.http.get<Evento[]>('assets/data/events.json');
    // later: swap this for an API call
  }

  getEventById(id: number): Observable<Evento | undefined> {
    return this.getEvents().pipe(map((arr) => arr.find((e) => e.id === id)));
  }
}
