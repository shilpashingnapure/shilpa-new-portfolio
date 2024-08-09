import { Component, HostListener, Input, OnInit } from '@angular/core';


import gsap from 'gsap';
import { MotionPathPlugin, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger , MotionPathPlugin);


@Component({
    selector: 'app-ufo-path',
    templateUrl: './ufo-path.component.html',
    styleUrls: ['./ufo-path.component.scss']
  })

export class UfoPathComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

    this.ufoAnimation()
  }


  landingAnimation(){

    let tween = gsap.timeline()

    tween.to('.ufo' , {
      left:50 ,
    })


    tween.to('.ufo' , {
      top : 650 ,
      transition : 'top 1s ease', 

    })

    

  }


  ufoAnimation() {
  


    let tween = gsap.timeline()


    tween.set('.ufo' , {
      opacity : 0
    })
    

    
    // add animation along with motion path
    tween.to('.ufo', {
      scrollTrigger : {
        trigger: '.portfolio',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
        toggleActions : 'play none none none',
        onUpdate : ()=>{
            gsap.set('.ufo', {
                top: innerHeight / 2,
              });
        },
        onLeave : () => {

          this.landingAnimation()
          
        } 

      },
      motionPath: {
        path: '#path',
        align: '#path',
        alignOrigin: [0.5, 0.5],
      },
      duration : 10 , 
      ease : 'none',
      opacity : 1 ,
      yoyo : true
      
    })

  



      

      
      
    

   
  }

}
