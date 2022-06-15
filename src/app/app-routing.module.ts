import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackEndComponent } from './back-end/back-end.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

import { HomePageComponent } from './components/home-page/home-page.component';


import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { ProductAddComponent } from './components/products/product-add/product-add.component';
import { FornEndComponent } from './forn-end/forn-end.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './sevice/auth.guard';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {


    path: "admin", canActivate: [AuthGuard], component: BackEndComponent,
    children: [
      { path: "", component: ListProductComponent },
      { path: "product/add", component: ProductAddComponent },
      { path: "product/add/:id", component: ProductAddComponent },
      { path: "product/list", component: ListProductComponent },

      // category
      // {path:"category/list",component:ListCategoryComponent},
      // {path:"category/add",component:AddCategoryComponent},
      // {path:"category/add/:id",component:AddCategoryComponent},
    ]
  },
  {
    path: "", component: FornEndComponent,
    children: [
      { path: "", component: HomePageComponent },
      { path: "blog", component: BlogPageComponent },
      { path: "contact", component: ContactPageComponent },
      { path: "login", component: LoginComponent },
      { path: "signin", component: SigninComponent },
  
     
    ]
  },

  { path: "detailProduct/:id", component: ProductDetailComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
