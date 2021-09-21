import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'tracking', loadChildren: ()=> import ('./time-tracking/time-tracking.module').then(m=> m.TimeTrackingModule) 
 },
 {path:'todo',
 loadChildren:()=> import ('./todo/todo.module').then(m=>m.TodoModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
