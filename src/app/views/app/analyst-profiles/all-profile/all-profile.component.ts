
import { Component, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { AddNewSurveyModalComponent } from 'src/app/containers/applications/add-new-survey-modal/add-new-survey-modal.component';
import { SurveyService, ISurvey } from './all-profile.service'
import { Profile, Skill } from '../../Module';
import { SelectDataService } from '../../app.server';



@Component({
  selector: 'app-all-profile',
  templateUrl: './all-profile.component.html',
  styleUrls: ['./all-profile.component.scss']
})
export class AllProfileComponent implements OnInit, OnDestroy {

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
  data : Profile [] = [];
  dataHardCode: Profile[] = [
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
      note:''},
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
        note:''},
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
          note:''}
    
          
  ];

  columns = [
    { prop: 'title', name: 'Title' },
    { prop: 'sales', name: 'Sales' },
    { prop: 'stock', name: 'Stock' },
    { prop: 'category', name: 'Category' },
    { prop: 'id', name: 'Id' }
  ];
  itemsPerPage = 10;
  itemOptionsPerPage = [5, 10, 20];
  selected = [];
  selectAllState = '';
  itemOrder = 'Title';
  itemOptionsOrders = ['Title', 'Category', 'Status', 'Label'];
  displayOptionsCollapsed = false;

  surveyItems: ISurvey[] = [];

  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: AddNewSurveyModalComponent;

  constructor(private selectDataService:SelectDataService, private surveyService: SurveyService, private renderer: Renderer2) { }

  ngOnInit() {
    this.getAllProfiles();
    this.renderer.addClass(document.body, 'right-menu');
    this.getItems();
  }
//query all profile
getAllProfiles(){
  this.selectDataService.getProfilesList().subscribe(response =>{
    if(response['data'] != null){
      this.data = response['data'];
      console.log("query placement success");
    }else{
      this.data = this.dataHardCode;
    }
  });
}
  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'right-menu');
  }

  getItems() {
    this.surveyService.getSurveyItems()
      .subscribe(items => {
        this.surveyItems = items;
      });
  }

  showAddNewModal() {
    this.addNewModalRef.show();
  }

  isSelected(p: ISurvey) {
    return this.selected.findIndex(x => x.id === p.id) > -1;
  }
  onSelect(item: ISurvey) {
    if (this.isSelected(item)) {
      this.selected = this.selected.filter(x => x.id !== item.id);
    } else {
      this.selected.push(item);
    }
    this.setSelectAllState();
  }

  setSelectAllState() {
    if (this.selected.length === this.surveyItems.length) {
      this.selectAllState = 'checked';
    } else if (this.selected.length !== 0) {
      this.selectAllState = 'indeterminate';
    } else {
      this.selectAllState = '';
    }
  }

  selectAll($event) {
    if ($event.target.checked) {
      this.selected = [...this.surveyItems];
    } else {
      this.selected = [];
    }
    this.setSelectAllState();
  }


}
