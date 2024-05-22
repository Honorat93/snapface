import { Component, OnInit } from '@angular/core';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapListComponent,HeaderComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {


  ngOnInit() {
 
  }
}