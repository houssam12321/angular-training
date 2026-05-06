import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../Employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    private employee : Employee[] = [
        { id: 1, name: 'John Doe', position: 'Developer', department: 'IT', salary: 50000 },
        { id: 2, name: 'Jane Smith', position: 'Manager', department: 'HR', salary: 60000 },
        { id: 3, name: 'Bob Johnson', position: 'Analyst', department: 'Finance', salary: 55000 }
    ];
    private employeesSubject = new BehaviorSubject<Employee[]>(this.employee);
    employee$ = this.employeesSubject.asObservable();

    addEmployee(emp: Employee) {
    emp.id = this.employee.length + 1;
    this.employee.push(emp);
    this.employeesSubject.next(this.employee);
  }

  updateEmployee(emp: Employee) {
    const index = this.employee.findIndex(e => e.id === emp.id);
    if (index !== -1) {
      this.employee[index] = emp;
      this.employeesSubject.next(this.employee);
    }
  }

  deleteEmployee(id: number) {
    this.employee = this.employee.filter(e => e.id !== id);
    this.employeesSubject.next(this.employee);
  }
    
}