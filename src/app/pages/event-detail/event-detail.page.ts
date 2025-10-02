import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  event: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // Simulación de evento (luego lo vas a traer de un servicio/API)
    this.event = {
      id,
      name: `Evento ${id}`,
      image: `/assets/event${id}.jpg`,
      responses: Math.floor(Math.random() * 50)
    };
  }

  goBack() {
    this.router.navigate(['/events']);
  }
}
