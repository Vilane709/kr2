import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }

  name: string = '';
  surname: string = '';
  sursurname: string = '';
  email: string = '';
  password: string = '';
  date: string = '';

  test(): void {
    console.log(this.name)
  }
  normal(): void {
    let user_obj: object = {
      name: this.name,
      surname: this.surname,
      sursurname: this.sursurname,
      email: this.email,
      password: this.password,
      date: this.date,
    }
    let user_str: string = JSON.stringify(user_obj);
    localStorage.setItem('userinfo', user_str)
  }
}
