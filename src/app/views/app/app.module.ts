import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './my-profile/my-profile.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { InterviewComponent } from './match/interview/interview.component';
import { PreferenceComponent } from './match/preference/preference.component';
import { MatchResultComponent } from './match/match-result/match-result.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NouisliderModule } from 'ng2-nouislider';
import { RatingModule } from 'ngx-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, InterviewComponent, PreferenceComponent, MatchResultComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    QuillModule.forRoot(),
    LayoutContainersModule,
    FormsModule, NgSelectModule, ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    RatingModule,
    DropzoneModule,
    NouisliderModule,
    TranslateModule,
    HttpClientModule
  ]
})
export class AppModule { }

