import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../services/employe.service';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee : Employee = { id: 0, name: '', position: '', department: '', salary: 0 };

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    //this.employees = this.employeeService.getEmployees();
    this.employeeService.employee$.subscribe(data => this.employees = data);
  }
  addEmployee() {
    this.employeeService.addEmployee(this.newEmployee);
    this.newEmployee = { id: 0, name: '', position: '', department: '', salary: 0 };
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
  }


  


}
