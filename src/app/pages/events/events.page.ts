import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage {
  events = [
    { id: 1, name: 'Evento 1', responses: 10, image: '/assets/event1.jpg' },
    { id: 2, name: 'Evento 2', responses: 4, image: '/assets/event2.jpg' },
    { id: 3, name: 'Evento 3', responses: 15, image: '/assets/event3.jpg' },
    { id: 4, name: 'Evento 4', responses: 35, image: '/assets/event4.jpg' },
  ];

  constructor(private router: Router) {}

  goToEvent(eventId: number) {
    this.router.navigate([`/event/${eventId}`]);
  }
}
