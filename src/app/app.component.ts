import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snaps.model';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [ 
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit',
        imageUrl: 'assets/img/goku.png',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris'
      },
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit',
        imageUrl: 'assets/img/goku.png',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris'
      },
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit',
        imageUrl: 'assets/img/goku.png',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris'
      }
    ];
  }
}