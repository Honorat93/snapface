import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snaps.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap (
      'Archibald',
      'Mon meilleur ami depuis tout petit',
      'assets/img/goku.png',
       new Date(),
       0,
    )
  }
}
