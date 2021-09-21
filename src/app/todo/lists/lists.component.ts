import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface list{
  todo:string;
  checked:boolean
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  @Input() thingstodo:list[]=[]
  @Output() delete= new EventEmitter
  @Input() toggle:boolean=false
 
  checked:boolean[]=[]

  constructor() {}

  ngOnInit(): void {  }

  change(e:number){
    this.thingstodo[e].checked=!this.thingstodo[e].checked
  }

  deletetodo(i:number){
    this.delete.emit(i)   
  }

}
