import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/dataService';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  soeid = 'jl67901';
  passwordModel = '123456';

  buttonDisabled = false;
  buttonState = '';

  constructor(private authService: AuthService, private notifications: NotificationsService, 
    private router: Router, private dataService:DataService, private storageService:StorageService) { }

  ngOnInit() {
  }

  onLoginClick() {
    if (!this.loginForm.valid || this.buttonDisabled) {
      return;
    }
    this.dataService.getUserRole(this.soeid).subscribe(response => {
      if(response['data']){
        this.storageService.setItem("soeid",this.soeid);
        this.storageService.setItem("role",response['data']);
      }else{
        return;
      }
    });
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';
    this.router.navigate(['/app']);
  }
}
