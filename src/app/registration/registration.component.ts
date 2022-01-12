import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  eName: string = '';
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      eName: new FormControl(''),
      eEmail: new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  getChildData(event: any){
      console.log('print data in parent comp', event)
  }

}
