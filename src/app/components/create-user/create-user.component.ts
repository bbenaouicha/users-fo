import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @Output()
  userAdded: EventEmitter<string> = new EventEmitter<string>()

  createUserForm: FormGroup = new FormGroup({});
  invalidAttributes: boolean = false;
  userAlreadyExists: boolean = false;

  constructor(private _formBuilder: FormBuilder, private el: ElementRef,
    private userService: UserService, private snackbarService: SnackbarService) { }

  ngOnInit(): void {

    this.createUserForm = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
    });
  }
  
  save() {
    this.userService.createUser(this.createUserForm.value).subscribe(
      () => {
        this.createUserForm.reset()
        let bouton = this.el.nativeElement.querySelector('#closebutton');
        bouton.click()
        this.userAdded.emit("user added successfully")
        this.snackbarService.showSnackbar("Utilisateur ajouté avec succès")
      },
      (error) => {
        if (error.status == 400) {
          this.userAlreadyExists = true
        }
        if (error.status == 406) {
          this.invalidAttributes = true
        }
      }
    )
  }
  cancel() {
    this.createUserForm.reset()
    this.userAlreadyExists = false
    this.invalidAttributes = false

  }

}
