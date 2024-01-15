import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import emailjs , { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor() {}

  profileForm : FormGroup; 
  @ViewChild('form') form : ElementRef;

  isChecked=false
  
  

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name : new FormControl('') ,
      email : new FormControl('') ,
      message : new FormControl('')
    })
    
  }


  changeSide(){
    this.isChecked = !this.isChecked
  }

  handleForm(){
    console.log(this.profileForm)
    console.log(this.form.nativeElement)
    emailjs.sendForm('service_yupt9zh' , 'template_p42s7qy' , this.form.nativeElement , 'zC0fbigrUF0OLNIEh').then((res)=>{
      console.log(res);
      this.changeSide()
      this.profileForm.reset()

    }).catch((err) => {
      console.log(err)
    })

  }
}
