import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getData().subscribe((result) => {
      this.data=result;
    
    });
  }
  title = 'The blog';
}
