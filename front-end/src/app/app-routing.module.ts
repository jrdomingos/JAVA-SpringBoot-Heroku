import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskService } from './services/task.service';
import { AppComponent } from './app.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
    providers:[TaskService],
    bootstrap:[AppComponent]
})
export class AppRoutingModule { }
