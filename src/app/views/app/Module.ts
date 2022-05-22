export class Placement {  
    name:string;
    soeid:string;
    currentAnalystSoeid:string;
    currentAnalystName:string;
    location:string;
    organization:string;
    keyStakeholderSoeids:String;
    keyStakeholders:Person[];
    analystResponsibility:string;
    keyProjectWork:string;
    proficients:string;
    systemKnowlegdes:string;
    teamName:string;
    rotationPosition:string;
    teamImg:string;

    constructor(){
    }
  }

  export class Profile {  
    name:string;
    soeid:string;
    geid:string;
    analystRole:string;
    location:string;
    degree:string;
    school:string;
    major:string;
    organization:string;
    managerName:string;
    managerSoeid:string;
    citiExperience:string
    language:Skill[];
    techSkills:Skill[];
    softSkill:Skill[];
    analystImg:string;
    note:string;

    constructor(){
      
    }
  }
  
  export class Person {
    name: string;
    soeid:string;
    role ?:string;
  }

  export class Skill {
    name: string;
    level:string;
    description?:string;
  }
  
  export class Interview {
    orgnanization:string;
    soeid:string;
    toSoeid:string;
    time:string;
    date:string
  }

  export class Preference{
    orgnanization:string;
    order:number;
    soeid?:string;
    toSoeid:string;
    note:string;
  }