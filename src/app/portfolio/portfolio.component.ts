import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';

import {gsap} from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {


  // @ViewChild('parentDiv') parentDiv  =  ElementRef<HTMLDivElement>;


  constructor() { }

  scrolled : boolean = false;


  @HostListener("window:scroll" , [])
  onWindowScroll(){
    this.scrolled = window.scrollY > 0;

    
    
  }

  ngOnInit(): void {
    // this.snappingAnimation()
    
  }

  snappingAnimation(){
    let sections = gsap.utils.toArray(".section")
    console.log(sections)

    gsap.to(sections , {
      xPercent : -100 * (sections.length - 1) , 
      ease : "none" ,
      scrollTrigger : {
        trigger : ".portfolio" ,
        snap : 1 / (sections.length - 1) ,
        
      }
    })
  }

}
