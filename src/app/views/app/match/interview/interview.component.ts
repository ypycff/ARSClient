import { Component, OnInit } from '@angular/core';
import { CONSTANT } from '../../Constant';
import { FormControl, FormGroup} from '@angular/forms';
import { SelectDataService } from '../../app.server';
import { Interview } from '../../Module';
import { StorageService } from 'src/app/storage.service';
@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {
  modulesBubble;
  organizationList;
  form: FormGroup;
  bsValue = new Date();
  basicTime = new Date();
  isNew:boolean = false;
  interviews:Interview[] = [{soeid:null,toSoeid:null,orgnanization:null,date:null,time:null}];
  constructor(private selectDataService:SelectDataService,private storageService:StorageService) { 
    this.modulesBubble = CONSTANT.MODULESBUBBLE;
    this.organizationList = CONSTANT.ORGANIZATIONLIST;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      basicDate: new FormControl(new Date()),
    });
    this.selectDataService.getMyInterview(this.storageService.getItem('soeid')).subscribe(response =>{
      if(response['data'] && response['data'].length > 0){
        this,this.interviews = response['data'];
      }
    });
  }

  addItem(){
    if(this.interviews.length < 10) {
      this.interviews.push({soeid:null,toSoeid:null,orgnanization:null,date:null,time:null});
    }
  }

  deleteItem(index){
    if(this.interviews.length > 1){
      this.interviews.splice(index, 1);
    }else{
      this.interviews  = [{soeid:null,toSoeid:null,orgnanization:null,date:null,time:null}];
    }
  }

  save(){
    this.interviews.forEach(element => {
      element.soeid = this.storageService.getItem('soeid');
    });
    if(this.isNew){
      this.selectDataService.addInterviews(this.interviews).subscribe(response =>{
        if(response['data'] === 'success'){
          console.log("add preferece success");
        }
      });
    }else{
      this.selectDataService.updateInterviews(this.interviews).subscribe(response =>{
        if(response['data'] === 'success'){
          console.log("update preferece success");
        }
      });
    }
    
  }

  submit(){
    this.selectDataService.submitInterviews(this.interviews).subscribe(response =>{
      if(response['data'] === 'success'){
        console.log("submit preferece success");
      }
    });
  }

}

