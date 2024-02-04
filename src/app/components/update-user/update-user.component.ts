import { Component, ElementRef, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnChanges {

  @Input()
  idUser: any;

  @Output()
  userUpdated: EventEmitter<string> = new EventEmitter<string>()
  invalidAttributes: boolean = false;

  userToUpdate: any = {};
  updateUserForm: FormGroup = new FormGroup({});

  constructor(private _formBuilder: FormBuilder, private el: ElementRef,
    private userService: UserService, private snackbarService: SnackbarService) { }

  ngOnInit(): void {

  }
  ngOnChanges(): void {
    this.updateUserForm = this._formBuilder.group({
      id: [],
      firstName: [, [Validators.required, Validators.maxLength(50)]],
      lastName: [, [Validators.required, Validators.maxLength(50)]],
      email: [, [Validators.required, Validators.email, Validators.maxLength(50)]],
    });
    if (this.idUser != undefined) {
      this.userService.getUserById(this.idUser).subscribe(
        (data) => {
          this.userToUpdate = data;
          this.updateUserForm.setValue({
            id: this.idUser,
            firstName: this.userToUpdate.firstName,
            lastName: this.userToUpdate.lastName,
            email: this.userToUpdate.email,
          })
        }
      )
    }

  }
  save() {
    this.userService.updateUser(this.idUser, this.updateUserForm.value).subscribe(
      () => {
        let bouton = this.el.nativeElement.querySelector('#closebutton');
        bouton.click()
        this.userUpdated.emit("user updated")
        this.snackbarService.showSnackbar("Utilisateur a été mis à jour avec succès")

      },
      (error) => {
        if (error.status === 406) {
          this.invalidAttributes == true
        }
      }
    );


  }

}
