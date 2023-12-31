import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss']
})
export class SectionHeadingComponent implements OnInit {

  @Input() large_heading : string ;

  @Input() small_heading : string;

  constructor() { }

  ngOnInit(): void {
  }

}
