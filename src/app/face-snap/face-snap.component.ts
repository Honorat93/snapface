import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.model';
import { CommonModule } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.services';
import { Route, Router } from '@angular/router';


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

  constructor(private faceSnapsService: FaceSnapsService, private router: Router) {};

  ngOnInit() {
    this.buttonText = 'Oh snap!'
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

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
