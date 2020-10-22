import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { RecordDetailsComponent } from './record-details/record-details.component';
import { RecordDetailComponent } from './record-details/record-detail/record-detail.component';
import { RecordDetailListComponent } from './record-details/record-detail-list/record-detail-list.component';
import { RecordDetailService } from './shared/record-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    RecordDetailsComponent,
    RecordDetailComponent,
    RecordDetailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RecordDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
