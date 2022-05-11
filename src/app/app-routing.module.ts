import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  {path:'hello', component: HelloComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
