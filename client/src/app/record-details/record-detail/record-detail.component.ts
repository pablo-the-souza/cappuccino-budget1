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
      date : "",
      name: "",
      value: "" , 
      category: "",
      type: ""
    }
  }

  onSubmit (form: NgForm) {
    this.service.postRecordDetail(form.value).subscribe(
      res=> {
        console.log("Deu Certo Porra")
        this.resetForm(form);
      },
      err=> {
        console.log(err);
      }
    );
  }

}
