import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reg-personal-details',
  templateUrl: './reg-personal-details.component.html',
  styleUrls: ['./reg-personal-details.component.css']
})
export class RegPersonalDetailsComponent implements OnInit {

  @Input('basicData') basicData: any = null;
  @Output() myEvent = new EventEmitter();
  persForm: FormGroup;
  finalData: any = null;
  constructor(private fb: FormBuilder) {
    this.persForm = fb.group({
      address:new FormControl()
    })
   }

  ngOnInit(): void {
    console.log('basicData in Parent ', this.basicData);
  }

  submitData(){
   // let obj = {addressDetails: this.eName + ' c/o '+ this.persForm.value.address }
   this.finalData ={
     eName: this.basicData.eName,
     eEmail: this.basicData.eEmail,
     address: this.persForm.value.address
   }
    console.log('form  data', this.persForm.value);
    console.log('basicData ', this.basicData);
    console.log('obj final data ',this.finalData);
    
  }

  sendData(){
      this.myEvent.emit(this.finalData);
  }

}
