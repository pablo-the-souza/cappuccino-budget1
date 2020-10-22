import { Component, OnInit } from '@angular/core';
import { RecordDetail } from 'src/app/shared/record-detail.model';
import { RecordDetailService } from 'src/app/shared/record-detail.service';

@Component({
  selector: 'app-record-detail-list',
  templateUrl: './record-detail-list.component.html',
  styles: [
  ]
})
export class RecordDetailListComponent implements OnInit {

  constructor(public service: RecordDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(rd: RecordDetail) {
    this.service.formData = Object.assign({}, rd)
  }

  onDelete(id) {
    if(confirm('Are you sure?')){
      this.service.deleteRecordDetail(id)
      .subscribe(
        res => {
          this.service.refreshList();
        },
        err => {
          console.log(err);
        })
    }
    
  }

}
