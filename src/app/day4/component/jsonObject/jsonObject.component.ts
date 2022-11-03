import { Component, OnInit } from '@angular/core';
import { GroupObject } from './sample.model';


@Component({
  selector: 'app-jsonObject',
  templateUrl: './jsonObject.component.html',
  styleUrls: ['./jsonObject.component.css']
})
export class JsonObjectComponent implements OnInit{
  jsonObject:any={
    group_name:"ITC",
    group_short_name:"ITC",
    business_groups:["food","it"],
  }
  jsonObjectCopy:any={}
  jsonObjectCopyWithoutRef:any={};

  model_details:GroupObject=new GroupObject();
  
  constructor(){

  }
  ngOnInit(): void {
    this.jsonObjectCopy=this.jsonObject;
    this.jsonObjectCopyWithoutRef={...this.jsonObject};
  }
}
