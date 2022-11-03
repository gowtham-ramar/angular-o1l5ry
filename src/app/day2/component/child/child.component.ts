import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../service/component.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  title = 'tutorial';
  reponseData:any=[]
  constructor(private componentService: ComponentService){

  }
  ngOnInit(): void {
    this.componentService.getValue().subscribe(t => this.reponseData = t);
  }
}
