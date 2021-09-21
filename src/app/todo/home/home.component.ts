import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

interface list{
  todo:string;
  checked:boolean
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 @ViewChild('newtodo') newtodo:ElementRef | any;

  thingstodo:string[]=[]
  things:string[]=[]
  x:list[]=[]
  i:number=0

  constructor() { }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('items')||'[]')){
      this.x=JSON.parse(localStorage.getItem('items')||'[]')
    }
    //localStorage.clear()
  }
  

  onsubmit(e:string){
    if(e===''){
      return alert('type somting todo')
    }else {
      this.x.push({
        todo:e,
        checked:false
      })
      this.things.push(e) 
      console.log(this.x);
      
      this.newtodo.nativeElement.value=''
      localStorage.setItem('items',JSON.stringify(this.x))     
    }
  }
  deletAtodo(i:number){
    this.x.splice(i,1)
    localStorage.setItem('items',JSON.stringify(this.x))
  }

}
