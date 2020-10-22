import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecordDetailService } from 'src/app/shared/record-detail.service';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styles: [
  ]
})
export class RecordDetailComponent implements OnInit {

  constructor(public service: RecordDetailService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.formData = {
      id: 0,
      date: "",
      name: "",
      value: "",
      category: "",
      type: ""
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0)
      this.insertRecord(form)
    else 
      this.updateRecord(form)
  }

  insertRecord(form: NgForm) {
    this.service.postRecordDetail().subscribe(
      res => {
        console.log("Insert ok")
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putRecordDetail().subscribe(
      res => {
        console.log("Update ok")
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

}
