import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formularioDeRegistro:FormGroup

  constructor(private fb:FormBuilder) {
    this.formularioDeRegistro = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required] ,
      telefono: '',
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
  }
}
