import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = {
    name: '',
    designation: '',
    age: 0,
    salary: 0
  };
  submitted = false;
  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
  }
  saveEmployee(): void {
    const data = {
      name: this.employee.name,
      designation: this.employee.designation,
      age: this.employee.age,
      salary: this.employee.salary
    };

    this.employeeService.create(data)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.submitted = true;
        },
        (error: any) => {
          console.log(error);
        });
  }
  newEmployee(): void {
    this.submitted = false;
    this.employee = {
      name: '',
      designation: '',
      age: 0,
      salary: 0
    };
  }

}