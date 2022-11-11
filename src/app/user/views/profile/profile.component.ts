import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {NotificationService} from "../../../service/notification.service";
import {AuthenticationService} from "../../../service/authentication.service";
import {concatMap, take} from "rxjs";
import {UserHttpService} from "../../services/user.http.service";
import {User} from "../../model/User.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  editing = false;
  private id = '';

  profileFormGroup = this.formBuilder.group({
    name: [{value: '', disabled: true}, Validators.required],
    lastName: [{value: '', disabled: true}],
    email: [{value: '', disabled: true}, [Validators.email, Validators.required]],
  })

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private userHttpService: UserHttpService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.loadFormData();
  }

  onEdit() {
    this.profileFormGroup.enable();
    this.profileFormGroup.get('email').disable();
    this.editing = true
  }

  onSave() {
    this.userHttpService.updateUser(this.id, this.profileFormGroup.getRawValue() as User)
      .subscribe({
        next: _ => {
          this.notificationService.showSuccess("Profile updated");
          this.editing = false;
          this.profileFormGroup.disable();
          // TODO refresh token
        }
      })
  }

  onCancel() {
    this.editing = false;
    this.profileFormGroup.disable();
    this.loadFormData();
  }

  private loadFormData() {
    this.authenticationService.session.pipe(
      take(1),
      concatMap(session => this.userHttpService.getByEmail(session.subjectEmail))
    ).subscribe(user => {
      this.profileFormGroup.setValue({
        name: user.name,
        lastName: user.lastName || '',
        email: user.email,
      });
      this.id = user.id;
    })
  }
}
