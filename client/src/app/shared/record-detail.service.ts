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

  postRecordDetail() {
    return this.http.post(this.rootURL+'/records', this.formData)
  }

  putRecordDetail() {
    return this.http.put(
      this.rootURL+'/records/' + this.formData.id, 
      this.formData)
  }

  deleteRecordDetail(id) {
    return this.http.delete(
      this.rootURL+'/records/' + id, 
  )
  }

  refreshList() {
    this.http.get(this.rootURL+'/records')
    .toPromise()
    .then(res => this.list = res as RecordDetail[])
  }
}
