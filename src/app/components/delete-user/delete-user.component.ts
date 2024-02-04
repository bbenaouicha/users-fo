import { Component, ElementRef, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnChanges {
  @Input() idUser: any;
  @Output() userDeleted: EventEmitter<string>= new EventEmitter<string>()

  userToDelete:any={};

  constructor(private el: ElementRef,private userService:UserService,private snackbarService: SnackbarService) { }

  ngOnChanges(): void {
    if (this.idUser != undefined) {
      this.userService.getUserById(this.idUser).subscribe(
        (data) => {
          this.userToDelete = data;
          
        }
      )

    }
  }
  delete(){
    this.userService.deleteUser(this.idUser).subscribe(
      ()=>{
        this.userDeleted.emit("user deleted")
        let bouton = this.el.nativeElement.querySelector('#closebutton');
        bouton.click()
        this.snackbarService.showSnackbar("Utilisateur supprimé avec succès")

      }
    )
   
  }
}
