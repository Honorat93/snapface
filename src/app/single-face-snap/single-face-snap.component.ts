import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.model';
import { FaceSnapsService } from '../services/face-snaps.services';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [CommonModule,FaceSnapComponent,RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
 faceSnap!: FaceSnap;
  
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {};

  ngOnInit() {
    this.buttonText = 'Oh snap!'
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if(this.buttonText === 'Oh snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh snap!';
    }
  }
}

