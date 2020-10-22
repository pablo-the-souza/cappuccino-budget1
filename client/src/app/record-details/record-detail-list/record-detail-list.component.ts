import { Component, OnInit } from '@angular/core';
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

}
