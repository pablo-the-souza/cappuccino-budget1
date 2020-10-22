import { Injectable } from '@angular/core';
import { RecordDetail } from './record-detail.model';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class RecordDetailService {
  formData: RecordDetail;
  readonly rootURL = 'https://localhost:5001/api';
  list: RecordDetail[];

  constructor(private http: HttpClient) { }

  postRecordDetail(formData: RecordDetail) {
    console.log(formData)
    return this.http.post(this.rootURL+'/records', formData)
  }

  refreshList() {
    this.http.get(this.rootURL+'/records')
    .toPromise()
    .then(res => this.list = res as RecordDetail[])
  }
}
