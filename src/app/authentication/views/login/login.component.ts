import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../service/authentication.service";
import {take} from "rxjs";
import {NotificationService} from "../../../service/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  })

  loading = false;

  constructor(private formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.loading = true;
    this.authenticationService.login(this.loginForm.value as { email: string, password: string })
      .pipe(take(1))
      .subscribe({
        next: session => {
          this.loading = false;
          this.notificationService.showSuccess('Welcome ' + session.subjectName);
          this.router.navigate(['itineraries'])
        },
        error: err => {this.loading = false; throw err},
      });
  }
}
