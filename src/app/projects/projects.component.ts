import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.porjectAnimation();
  }

  porjectAnimation() {
    gsap.from('#project-1', {
      scrollTrigger: {
        trigger: '#project-1',
        start: '40% center',
        scrub: true,
        toggleActions: 'restart',
      },
      rotationX: 180,
      x: 5,
      opacity: 0.7,
      duration: 1,
    });

    gsap.from('#project-2', {
      scrollTrigger: {
        trigger: '#project-2',
        start: '40% center',
        scrub: true,
        toggleActions: 'restart',
      },
      rotationX: 180,
      x: 5,
      opacity: 0.7,
      duration: 1,
    });
  }
}
