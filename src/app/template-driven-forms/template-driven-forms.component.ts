import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {


  userObject = {
    userName: '',
    passwd: ''
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm){
  
    console.log('user obj', this.userObject)
  }


}
