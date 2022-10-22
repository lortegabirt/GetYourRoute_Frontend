import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../service/authentication.service";
import {User} from "../../../user/model/User.model";
import {Router} from "@angular/router";
import {NotificationService} from "../../../service/notification.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup = this.formBuilder.group({
    name: ['', Validators.required],
    lastName: [''],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  })

  loading = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private notificationService: NotificationService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  onSignup() {
    this.loading = true;
    this.authenticationService.signup(this.signup.value as User)
      .subscribe({
        next: _ => {
          this.loading = false;
          this.notificationService.showSuccess('The user has been created');
          this.router.navigate(['auth', 'login']);
          },
        error: err => {this.loading = false; throw err},
      });
  }


}
