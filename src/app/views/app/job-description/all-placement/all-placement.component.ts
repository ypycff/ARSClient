import { Component, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { AddNewSurveyModalComponent } from 'src/app/containers/applications/add-new-survey-modal/add-new-survey-modal.component';
import { Placement } from '../../Module';
import { SelectDataService } from '../../app.server';

@Component({
  selector: 'app-all-placement',
  templateUrl: './all-placement.component.html',
  styleUrls: ['./all-placement.component.scss']
})
export class AllPlacementComponent implements OnInit, OnDestroy {
  data : Placement [] = [];
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
  itemOptionsOrders = ['Organization', 'Category', 'Status', 'Label'];
  displayOptionsCollapsed = false;

  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: AddNewSurveyModalComponent;

  constructor(private selectDataService : SelectDataService, private renderer: Renderer2) { }

  ngOnInit() {

    this.getAllPlacements();
    this.renderer.addClass(document.body, 'right-menu');
    
  }
  //query all placement
  getAllPlacements(){
    this.selectDataService.getPlacementsList().subscribe(response =>{
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

}
