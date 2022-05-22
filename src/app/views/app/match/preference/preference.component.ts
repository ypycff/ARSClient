import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { CONSTANT } from '../../Constant';
import { SelectDataService } from '../../app.server';
import { Preference } from '../../Module';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {
  modulesBubble;
  
  organizationList;
  optionOrderList = [1,2,3,4,5];
  isNew:boolean = false;

  preferences:Preference[] = [{order:null,toSoeid:null,orgnanization:null,note:null}];

  constructor(private selectDataService:SelectDataService,
    private storageService:StorageService) {
    this.modulesBubble = CONSTANT.MODULESBUBBLE;
    this.organizationList = CONSTANT.ORGANIZATIONLIST;
   }

  ngOnInit(): void {
    this.selectDataService.getMyPreference(this.storageService.getItem('soeid')).subscribe(response =>{
      if(response['data'] && response['data'].length > 0){
        this.preferences = response ['data'];
      }else{
        this.preferences = [{order:null,toSoeid:null,orgnanization:null,note:null}]
      }
    });
  }

  addItem(){
    if(this.preferences.length < 5) {
      this.preferences.push({order:this.preferences.length+1,toSoeid:null,orgnanization:null,note:null});
    }
  }

  deleteItem(index){
    if(this.preferences.length > 1){
      this.preferences.splice(index, 1);
      this.setOrder(index);
    }else{
      this.preferences  = [{order:null,toSoeid:null,orgnanization:null,note:null}];
    }
  }

  setOrder(index: any) {
    let i  =  0 ;
    this.preferences.forEach (preference => {
      i += 1;
      preference.order = i;
    })
  }

  save(){
    this.preferences.forEach(preferece =>{
      preferece.soeid = this.storageService.getItem('soeid');
    })
    if(this.isNew){
      this.selectDataService.addPreference(this.preferences).subscribe(response =>{
        if(response['data'] === 'success'){
          console.log("add preferece success");
        }
      });
    }else{
      this.selectDataService.updatePreference(this.preferences).subscribe(response =>{
        if(response['data'] === 'success'){
          console.log("update preferece success");
        }
      });
    }
    
  }

  submit(){
    this.selectDataService.submitPreference(this.preferences).subscribe(response =>{
      if(response['data'] === 'success'){
        console.log("submit preferece success");
      }
    });
  }
}

