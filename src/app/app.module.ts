import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailComponent } from'./components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/products/product-add/product-add.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';




import { NzLayoutModule, } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';


import { BackEndComponent } from './back-end/back-end.component';
import {FornEndComponent} from './forn-end/forn-end.component';
import { HeaderComponent } from './components/layout/header/header.component'
import { FooterComponent } from './components/layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';



registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
   
        HomePageComponent,
        ProductDetailComponent,
        ProductAddComponent,
        ListProductComponent,
      
        BackEndComponent,
        FornEndComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        SigninComponent,
        BlogPageComponent,
        ContactPageComponent
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTableModule,
    HttpClientModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzDividerModule,
    NzFormModule,
    NzSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    NzButtonModule

    
  
  
   
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
