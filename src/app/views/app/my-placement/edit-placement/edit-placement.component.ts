import { Component, OnInit } from '@angular/core';
import { Skill } from '../../my-profile/my-profile.component';
import { CONSTANT } from '../../Constant';
import { Person, Placement } from '../../Module';
import { SelectDataService } from '../../app.server';
import { DataService } from 'src/app/dataService';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-edit-placement',
  templateUrl: './edit-placement.component.html',
  styleUrls:['edit-placement.component.css']
})
export class EditPlacementComponent implements OnInit {

  placement:Placement = new Placement();
  modulesBubble;
  organizationList:string[];

levels = [
  {id: 1, name: 'Primary'},
  {id: 2, name: 'Intermediate'},
  {id: 3, name: 'Advanced'},
]

isNew:boolean = true;

  constructor(private selectDataService:SelectDataService,private storageService:StorageService) {
    this.modulesBubble = CONSTANT.MODULESBUBBLE;
    this.organizationList = CONSTANT.ORGANIZATIONLIST;
   }

  ngOnInit() {
    this.selectDataService.getOnePlacement(this.storageService.getItem("soeid")).subscribe(response => {
      if(response['data']){
        this.placement = response['data'];
        this.isNew =false;
      }else{
        this.isNew = true;
        this.placement.keyStakeholders = [{name:'', soeid:'', role:''}];
      }
    });
  }

  addTagFn(addedName) {
    return { name: addedName, tag: true };
  }

  addItem(list:any){
    list.push({name:'',level:''});
  }

  deleteItem(list:any, index){
    if(list.length !== 1){
      list.splice(index, 1);
    }
    
  }

  addKeyRole(){
    this.placement.keyStakeholders.push({name:'', soeid:'', role:''});
  }

  deleteKeyRole(index){
    this.placement.keyStakeholders.splice(index, 1);
    if(this.placement.keyStakeholders.length == 0){
      this.addKeyRole();
    }
  }

  save(){
    this.placement.keyStakeholderSoeids = this.placement.keyStakeholders.map(person=> person.soeid).join(',');
    if(this.isNew){
      this.selectDataService.addPlacement(this.placement).subscribe(response =>{
        if(response['data'] === 'success'){
          console.log("add preferece success");
        }
      });
    }else{
      this.selectDataService.updatePlacement(this.placement).subscribe(response =>{
        if(response['data'] === 'success'){
          console.log("update preferece success");
        }
      });
    }
    
  }

  submit(){
    this.selectDataService.submitPlacement(this.placement).subscribe(response =>{
      if(response['data'] === 'success'){
        console.log("submit preferece success");
      }
    });
  }

}

