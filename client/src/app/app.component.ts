import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecordDetail } from './shared/record-detail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/records').subscribe((response: RecordDetail) => {
      console.log(response)
    }, error => {
      console.log(error);
    });
  }
}

