
import { CommonModule } from '@angular/common';
import { HostListener,Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LocationStrategy } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';
  loading = false;
  Username;
  Password;

  button = 'Submit';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,private location: LocationStrategy  ) {
    
    }
  ngOnInit() {
 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
});

 
 
}

get f() { return this.loginForm.controls; }

 
//AUTHENTICATION

onSubmit() {

  this.submitted = true;
   if (this.loginForm.invalid) {
     return;
   }
  this.loading = true;
  this.button = 'Processing';

  
  
  this.Username=this.f.username.value;
  this.Password=this.f.password.value;


  if(this.Username == 'Admin' && this.Password=='1234'){
  
  
    setTimeout(() => {
      this.loading = false;
      this.button = 'Submit';
      sessionStorage.setItem('loggedUser', this.Username);
      this.router.navigate(['/landingpage']); 
     
    }, 3000)
  }
  

  else {
   // object.StatusMessage=="Wrong Password"
   alert('Invalid Userbame and Password');
   this.loading = false;
   this.Username='';
   this.Password='';
}
}
}
