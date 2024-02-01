import { Component, Input, OnInit } from '@angular/core';


import gsap from 'gsap';
import { MotionPathPlugin, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

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
      left:80 ,
    })
    // tween.to('.ufo-landing' , {
    //   keyframes : [

    //     { borderBottomWidth : 10 , opacity : .1},
    //     {  borderBottomWidth : 100 , opacity : .2} ,
    //     {  borderBottomWidth : 150 , opacity : .4} ,
    //     { borderBottom : 200  , opacity : .4}
    //   ]
    // })

    tween.to('.ufo' , {
      top : 480 ,
      transition : 'top 1s ease', 

    })

    // tween.to('.ufo-landing' , {
    //   keyframes : [
    //     { borderBottom : 100 , opacity : .2}
    //   ]
      
    // } , '<')
    

  }


  ufoAnimation() {
  


    let tween = gsap.timeline()


    tween.set('.ufo' , {
      // top: 100, 
      // left : 50,
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
