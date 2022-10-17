import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../model/Products';
import { UserService } from '../sevice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   // @Output() createProduct = new EventEmitter<{ email: string, password: string }>();
   users!: IUser[];
   user:IUser = {
     username: "",
     email: "",
     password: "",
     role: 0
   }
   constructor(
     private userService: UserService,
     private route:Router,
     private activeRoute: ActivatedRoute
   ) { }
 
   ngOnInit(): void {
   }
 
   onSubmit() {
     try {
       console.log(this.user);
       // call service userSerive register
         this.userService.register(this.user).subscribe(data => {
         alert("Register Successfully !");
        
         // chuyển hướng tới login
         this.route.navigateByUrl("/signin");
         
       })
      
     } catch (error) {
       
       alert("Lỗi rồi");
     }
   }
   
 }
