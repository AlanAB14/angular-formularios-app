import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.setValue(this.persona); 
  }

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.required]
  })

  persona = {
    genero : 'F',
    notificaciones: true
  }


}
