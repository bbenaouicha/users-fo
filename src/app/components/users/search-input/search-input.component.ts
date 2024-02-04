import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { User } from 'src/app/models/user.types';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnChanges {

  @Input() 
  filter: any;

  @Output() 
  detectTyping: EventEmitter<any> = new EventEmitter<any>();

  users:any=[]

  constructor(private userService: UserService) { }

  ngOnChanges(): void {
    this.getAllUsers()
  }

  search() {
        return this.users.filter((user: User) =>
        user.firstName.toLowerCase().includes(this.filter.toLowerCase()) ||
        user.lastName.toLowerCase().includes(this.filter.toLowerCase())
      );
  }

  searchUsers() {
    this.detectTyping.emit({ filteredUsers: this.search(), filter: this.filter });
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      (data:any)=>{
        this.users=data
      })
  }

 
}
