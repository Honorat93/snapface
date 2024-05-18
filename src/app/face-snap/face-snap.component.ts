import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.model';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Oh snap!'
  }

  onSnap() {
    if(this.buttonText === 'Oh snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else{
      this.faceSnap.snaps--;
      this;this.buttonText = 'Oh snap!';
    }
  }
}
