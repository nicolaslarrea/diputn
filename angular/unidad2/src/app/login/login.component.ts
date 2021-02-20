import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formularioDeIngreso:FormGroup

  constructor(private fb:FormBuilder) {
    this.formularioDeIngreso = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
  }
}
