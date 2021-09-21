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

  x:list[]=[]
  i:number=0
  toggle:boolean=true
  me:any

  constructor() {
    
   }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('items')||'[]')){
      this.x=JSON.parse(localStorage.getItem('items')||'[]')
    }    
  }  
  toggles(e:boolean){
    this.toggle=!this.toggle
    localStorage.setItem('toggle',JSON.stringify(e)) 
  }
  prevent(e:any){
    e.preventDefault();
  }
  onsubmit(e:string){    
    if(e===''){
      return alert('type somting todo')
    }else {
      this.x.push({
        todo:e,
        checked:false
      })      
      this.newtodo.nativeElement.value=''
      localStorage.setItem('items',JSON.stringify(this.x))     
    }
  }

  deletAtodo(i:number){
    this.x.splice(i,1)
    localStorage.setItem('items',JSON.stringify(this.x))
  }

}
