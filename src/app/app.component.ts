import { Component, OnInit } from '@angular/core';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable, filter, interval, map, tap} from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapListComponent,HeaderComponent, RouterLink, RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  interval$!: Observable<string>;

  ngOnInit() {

    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? 
        `je suis ${value} et je suis pair` :
        `je suis ${value} et je suis impair`
       ),
       tap(text => this.logger(text)),
    );
  }

  logger(text: string){
    console.log(`Log: ${text}`);
  }
}