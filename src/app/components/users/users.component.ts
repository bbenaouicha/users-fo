import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.types'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  searchTerm: string = '';
  idUser: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers()

  }

  selectUser(user: User) {
    this.idUser = user.id;
  }

  search(listAndFilter: any) {
    this.searchTerm = listAndFilter.filter;
    this.users = listAndFilter.filteredUsers;

  }

  displayUsers(event: any) {
    this.searchTerm=''
    this.getAllUsers()
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        this.users = data
      }
    )
  }
}
