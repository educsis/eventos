import { Injectable } from '@angular/core';

export interface Evento {
  id: number;
  title: string;
  img: string;
  responses: number;
}

@Injectable({ providedIn: 'root' })
export class EventsService {
  private events: Evento[] = [
    { id: 1, title: 'Evento 1', img: 'assets/images/event1.jpg', responses: 11 },
    { id: 2, title: 'Evento 2', img: 'assets/images/event2.jpg', responses: 4 },
    { id: 3, title: 'Evento 3', img: 'assets/images/event3.jpg', responses: 15 },
    { id: 4, title: 'Evento 4', img: 'assets/images/event4.jpg', responses: 35 },
  ];

  getEvents() { return [...this.events]; }
  getEventById(id: number) { return this.events.find(e => e.id === id) || null; }
}
