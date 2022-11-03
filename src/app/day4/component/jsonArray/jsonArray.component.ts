import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsonArray',
  templateUrl: './jsonArray.component.html',
  styleUrls: ['./jsonArray.component.css']
})
export class JsonArrayComponent implements OnInit{
  
jsonArray:any=[{
    group_name:"ITC",
    group_short_name:"ITC",
    business_groups:["food","it"],
  },
  {
    group_name:"Tata",
    group_short_name:"tata",
    business_groups:["it","steel"],
    agreement:[
      {
        "agreement_name":"Factory",
        "validity":"upto 2023"
      }
    ],
  }
]
  jsonArrayCopy:any=[]
  jsonArrayCopyWithoutRef:any=[]
  
  constructor(){

  }
  ngOnInit(): void {
    this.jsonArrayCopy=this.jsonArray;
    this.jsonArrayCopyWithoutRef={...this.jsonArray};
  }
}
