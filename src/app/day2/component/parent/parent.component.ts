import { Component, OnInit } from '@angular/core';
import { APIService } from '../../service/api.service';
import { ComponentService } from '../../service/component.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  age = '0';
  amount = '0';
  title = "test";
  data = [
    {
      name: "test 1",
      deleted: true,
    },
    {
      name: "test 2",
      deleted: false,
    }
  ]
  filterCondition: any = {
    "value": true,
    "key": "deleted",
    "type": "boolean"
  }
  responseData:any=[];
  constructor(private apiService: APIService,
     private componentService: ComponentService
    ) {

  }
  ngOnInit(): void {
    this.apiService.getRecords().subscribe(c => {
      this.responseData=c.data;
    })
    this.componentService.setValue({value:"hai"});
  }

}
