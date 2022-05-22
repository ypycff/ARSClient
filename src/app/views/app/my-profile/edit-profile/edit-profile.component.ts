import { Component, OnInit } from '@angular/core';
import { Skill } from '../my-profile.component';
import { CONSTANT } from '../../Constant';
import { SelectDataService } from '../../app.server';
import { Profile } from '../../Module';
import { DataService } from 'src/app/dataService';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

 
  modulesBubble;
  profile:Profile = new Profile();
  isNew:boolean = true;
levels = [
   'Primary',
   'Intermediate',
  'Advanced',
]

  constructor(private selectDataService:SelectDataService, private storageService:StorageService) {
    this.modulesBubble = CONSTANT.MODULESBUBBLE;
   }

  ngOnInit() {
    this.selectDataService.getOneProfile(this.storageService.getItem("soeid")).subscribe(response => {
      if(response['data']){
        this.isNew = false;
        this.profile = response['data'];
        
      }else{
        this.isNew = true;
      }
    });
    this.profile.language = this.profile.language ? this.profile.language: [{name:'',level:''}];
    this.profile.techSkills = this.profile.techSkills ? this.profile.techSkills:[{name:'',level:''}];
    this.profile.softSkill = this.profile.softSkill?this.profile.softSkill:[{name:'',level:''}];
  }

  addTagFn(addedName) {
    return { name: addedName, tag: true };
  }

  addItem(skills:Skill[]){
    skills.push({name:'',level:''});
  }

  deleteItem(skills:Skill[], index){
    if(skills.length == 1){
      skills = [{name:'',level:''}];
    }else{
     skills.splice(index, 1);
    } 
    
  }

  save(){
    if(this.isNew){
      this.selectDataService.addProfile(this.profile).subscribe(response =>{
        if(response['data'] === 'success'){
          console.log("add preferece success");
        }
      });
    }else{
      this.selectDataService.updateProfile(this.profile).subscribe(response =>{
        if(response['data'] === 'success'){
          console.log("update preferece success");
        }
      });
    }
    
  }

  submit(){
    this.selectDataService.submitProfile(this.profile).subscribe(response =>{
      if(response['data'] === 'success'){
        console.log("submit preferece success");
      }
    });
  }


}
