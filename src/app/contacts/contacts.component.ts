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

  isclick : boolean = false;

  

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name : new FormControl('') ,
      email : new FormControl('') ,
      message : new FormControl('')
    })
    
  }


  handleForm(){
    this.isclick = true;
    emailjs.sendForm('service_yupt9zh' , 'template_p42s7qy' , this.form.nativeElement , 'zC0fbigrUF0OLNIEh').then((res)=>{

      setTimeout(()=>{
        this.profileForm.reset()
        this.isclick = false;

      } , 1000)

    }).catch((err) => {
      console.log(err)
    })

  }
}
