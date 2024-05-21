import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  
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
