import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  scrolled : boolean = false;

  

  @HostListener("window:scroll" , [])
  onWindowScroll(){
    this.scrolled = window.scrollY > 0;

    
    
  }

  ngOnInit(): void {
  }

}
