import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  currentEmployee: Employee = {
    name: '',
    designation: '',
    age: 0,
    salary: 0
  };

  roles: string[] = [];
  isLoggedIn = false;
  username?: string;

  message = '';
  constructor(private employeeService: EmployeeServiceService, private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.message = '';
    this.getEmployee(this.route.snapshot.params.id);

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
  }
  getEmployee(id: string): void {
    this.employeeService.get(id)
      .subscribe(
        data => {
          this.currentEmployee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateEmployee(): void {
    this.message = '';

    this.employeeService.update(this.currentEmployee.id, this.currentEmployee)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This Employee data was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
  deleteEmployee(): void {
    this.employeeService.delete(this.currentEmployee.id)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['/employees']);
        },
        (error: any) => {
          console.log(error);
        });
  }
}
