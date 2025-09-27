import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import gsap from 'gsap';
import { MotionPathPlugin, ScrollTrigger } from 'gsap/all';

// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';



  constructor(private elem: ElementRef) {}

  ngOnInit(): void {
    // this.ufoAnimation();
  }

  // ufoAnimation() {
  


  //   let tween = gsap.timeline()
  //   tween.to('.ufo', {
  //     motionPath: {
  //       path: '#path',
  //       align: '#path',
  //       alignOrigin: [0.5, 0.5],
  //     },
  //     scrollTrigger: {
  //       trigger: '.container',
  //       start: 'top top',
  //       end: 'bottom bottom',
  //       scrub: 1,
  //     },
  //     duration: 10,
  //     ease: 'none',
  //   });

    

    


  //   window.onload = window.onresize = () => {
  //     gsap.set('.ufo', {
  //       top: innerHeight / 2,

  //     });
  //   };
  // }
}