import { Component, OnInit } from '@angular/core';
import { Profile, Skill} from '../../Module';
import { SelectDataService } from '../../app.server';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-review-profile',
  templateUrl: './review-profile.component.html',
  styleUrls: ['./review-profile.component.scss']
})
export class ReviewProfileComponent implements OnInit {

  anaLystSoeid:string; 
  profile : Profile;
  
  constructor(private selectDataService:SelectDataService, private storageService:StorageService) {
  }

  ngOnInit() {
    this.getOneProfile();
  }
  getOneProfile(){
    this.selectDataService.getOneProfile(this.storageService.getItem("soeid")).subscribe(response =>{
      if(response['data'] != null){
        this.profile = response['data'];
      
      }else{
        this.profile = this.profileHardCode;
      }
    });
  
  }
  
  skill: Skill [] =[
    {
      name: 'English',
      level:'CET-6',
      description:'English well'
    },
    {
      name: 'Java',
      level:'proficient',
      description:'proficient in java'
    },
    {
      name: 'teamWork',
      level:'good',
      description:'I am a good team worker'
    }
  ];
  profileHardCode: Profile = 
    { 
      name:'Zhang, san',
      soeid:'xy12345',
      geid:'1011068953',
      analystRole:'Dev-Backend',
      location:'Huamu',
      degree:'master',
      school:'Hunan university',
      major:'Computer Technology',
      organization:'ISG',
      managerName:'KL12345',
      managerSoeid:'Julia',
      citiExperience:'  Java is an object oriented language which gives a clear structure to programs and allows code to',
      language:Skill[0],
      techSkills:Skill[1],
      softSkill:Skill[2],
      analystImg:'/assets/img/profile-pic-l.jpg',
      note:''
    };

}




