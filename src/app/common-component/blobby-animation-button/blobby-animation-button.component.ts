import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blobby-animation-button',
  templateUrl: './blobby-animation-button.component.html',
  styleUrls: ['./blobby-animation-button.component.scss']
})
export class BlobbyAnimationButtonComponent implements OnInit {

  @Input() btnStyle  = {
    width : "200px" ,
    height : "200px" ,
    btnName : "Button",
    bgColor : 'pink' ,
    color : '#fff'
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
