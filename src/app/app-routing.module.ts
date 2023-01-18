import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatagoryComponent } from './home/catagory/catagory.component';
import { EntryComponent } from './home/entry/entry.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './home/view/view.component';


const routes: Routes = [
{path:'home',component:HomeComponent,
children:
[{path:'entry',component:EntryComponent},
{path:'view',component:ViewComponent},
{path:'catagory',component:CatagoryComponent}]
},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
