import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [SearchInputComponent],
      imports: [ HttpClientModule ],
    })
      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 

  it('should return all users when filter is empty', () => {
    component.users = [
      {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com"
      },
      {
        "id": 2,
        "firstName": "Alice",
        "lastName": "Johnson",
        "email": "alice.johnson@example.com"
      },
      {
        "id": 3,
        "firstName": "Bob",
        "lastName": "Smith",
        "email": "bob.smith@example.com"
      },
      {
        "id": 4,
        "firstName": "Emily",
        "lastName": "Brown",
        "email": "emily.brown@example.com"
      },
      {
        "id": 5,
        "firstName": "Michael",
        "lastName": "Wilson",
        "email": "michael.wilson@example.com"
      },
      {
        "id": 6,
        "firstName": "Sarah",
        "lastName": "Miller",
        "email": "sarah.miller@example.com"
      },
      {
        "id": 7,
        "firstName": "John",
        "lastName": "Doe2",
        "email": "john.doe2@example.com"
      }
    ];
    component.filter = '';
    let result =component.search();
    expect(result.length).toBe(7); 
  });

  it('should filter users regardless of case sensitivity', () => {
    component.users = [
      {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com"
      },
      {
        "id": 2,
        "firstName": "Alice",
        "lastName": "Johnson",
        "email": "alice.johnson@example.com"
      },
      {
        "id": 3,
        "firstName": "Bob",
        "lastName": "Smith",
        "email": "bob.smith@example.com"
      },
      {
        "id": 4,
        "firstName": "Emily",
        "lastName": "Brown",
        "email": "emily.brown@example.com"
      },
      {
        "id": 5,
        "firstName": "Michael",
        "lastName": "Wilson",
        "email": "michael.wilson@example.com"
      },
      {
        "id": 6,
        "firstName": "Sarah",
        "lastName": "Miller",
        "email": "sarah.miller@example.com"
      },
      {
        "id": 7,
        "firstName": "John",
        "lastName": "Doe2",
        "email": "john.doe2@example.com"
      }
    ];
    component.filter = 'JOHN';
    let result= component.search();
    expect(result.length).toBe(3);
  });

  it('should return empty array when no user matches the filter', () => {
    component.users = [
      {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com"
      },
      {
        "id": 2,
        "firstName": "Alice",
        "lastName": "Johnson",
        "email": "alice.johnson@example.com"
      },
      {
        "id": 3,
        "firstName": "Bob",
        "lastName": "Smith",
        "email": "bob.smith@example.com"
      },
      {
        "id": 4,
        "firstName": "Emily",
        "lastName": "Brown",
        "email": "emily.brown@example.com"
      },
      {
        "id": 5,
        "firstName": "Michael",
        "lastName": "Wilson",
        "email": "michael.wilson@example.com"
      },
      {
        "id": 6,
        "firstName": "Sarah",
        "lastName": "Miller",
        "email": "sarah.miller@example.com"
      },
      {
        "id": 7,
        "firstName": "John",
        "lastName": "Doe2",
        "email": "john.doe2@example.com"
      }
    ];
    component.filter = 'NonExistentUser'; 
    let result= component.search();
    expect(result.length).toBe(0);
  });

});
