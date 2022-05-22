import { Component, OnInit } from '@angular/core';
import { Placement } from '../../Module';
import { SelectDataService } from '../../app.server';

@Component({
  selector: 'app-review-placement',
  templateUrl: './review-placement.component.html',
  styleUrls:['review-placement.component.css']
})
export class ReviewPlacementComponent implements OnInit {

  managerSoeid:string;
  placement:Placement;
  constructor( private selectDataService:SelectDataService) {
  }

  ngOnInit() {
    this.getOnePlacement();
  }

  getOnePlacement(){
    this.selectDataService.getOnePlacement(this.managerSoeid).subscribe(response =>{
      if(response['data'] != null){
        this.placement = response['data'];
      
      }else{
        this.placement = this.placementHardCode;
      }
    });
  }

  
  placementHardCode:Placement = {
    name:'Julia',
    soeid:'KL12345',
    currentAnalystName:'jiawei',
    currentAnalystSoeid:'jl67901',
    location:'Huamu',
    organization:'ISG',
    keyStakeholderSoeids:'',
    keyStakeholders:[{name:'Tim',soeid:'zw12345'}],
    analystResponsibility:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs. As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.',
    keyProjectWork:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs. As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.',
    proficients:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs. As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.',
    systemKnowlegdes:'Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs. As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.',
    teamName:"ECO",
    rotationPosition:"Dev-Frontend",
    teamImg:"/assets/img/genoise-thumb.jpg"
  };

}
