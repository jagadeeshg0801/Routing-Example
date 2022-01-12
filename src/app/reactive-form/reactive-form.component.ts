import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder) { 
    this.registerForm = this.fb.group(
      {
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.email, Validators.required] )

      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
  }

  get regformControls(){
    return this.registerForm.controls;
  }

}
