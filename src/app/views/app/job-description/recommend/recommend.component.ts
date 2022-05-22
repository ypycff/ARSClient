import { Component, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { AddNewSurveyModalComponent } from 'src/app/containers/applications/add-new-survey-modal/add-new-survey-modal.component';
import { SurveyService, ISurvey } from './recommend.service'
import { Placement } from '../../Module';
import { SelectDataService } from '../../app.server';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit, OnDestroy {
  data: Placement[] = [];
  dataHardCode: Placement[] = [
    {
      name:'Julia',
      soeid:'KL12345',
      currentAnalystName:'jiawei',
      currentAnalystSoeid:'jl67901',
      location:'Huamu',
      organization:'ISG',
      keyStakeholderSoeids:'',
      keyStakeholders:[{name:'Tim',soeid:'zw12345', role:'PM'}, {name:'Echo',soeid:'zw12345', role:'BA'}],
      analystResponsibility:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs. ',
      keyProjectWork:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs.',
      proficients:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs. ',
      systemKnowlegdes:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs. ',
      teamName:"ECO",
      rotationPosition:"Dev-Backend",
      teamImg:"/assets/img/profile-pic-l.jpg"
    },
    {
      name:'Julia',
      soeid:'KL12345',
      keyStakeholderSoeids:'',
      currentAnalystName:'jiawei',
      currentAnalystSoeid:'jl67901',
      location:'Huamu',
      organization:'ISG',
      keyStakeholders:[{name:'Tim',soeid:'zw12345', role:'PM'}, {name:'Echo',soeid:'zw12345', role:'BA'}],
      analystResponsibility:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs. As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.',
      keyProjectWork:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs. As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.',
      proficients:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs. As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.',
      systemKnowlegdes:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs. As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.',
      teamName:"ECO",
      rotationPosition:"Dev-Frontend",
      teamImg:"/assets/img/profile-pic-l.jpg"
    },
    {
      name:'Julia',
      soeid:'KL12345',
      currentAnalystName:'jiawei',
      currentAnalystSoeid:'jl67901',
      location:'Huamu',
      organization:'ISG',
      keyStakeholderSoeids:'',
      keyStakeholders:[{name:'Tim',soeid:'zw12345', role:'PM'}, {name:'Echo',soeid:'zw12345', role:'BA'}],
      analystResponsibility:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs. As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.',
      keyProjectWork:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs. As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.',
      proficients:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs. As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.',
      systemKnowlegdes:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs. As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.',
      teamName:"ECO",
      rotationPosition:"BA",
      teamImg:"/assets/img/profile-pic-l.jpg"
    }      
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

  managerSoeid : string;
  constructor(private selectDataService: SelectDataService, private surveyService: SurveyService, private renderer: Renderer2) { }

  ngOnInit() {
    this.getRecomend();
    this.renderer.addClass(document.body, 'right-menu');
    this.getItems();
  }
//query all placement
getRecomend(){
  this.selectDataService.getRecommendation(this.managerSoeid).subscribe(response =>{
    if(response['data'] != null){
      this.data = response['data'];
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
