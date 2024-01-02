import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  @ViewChild('parentDiv') parentDiv: ElementRef<HTMLDivElement>;

  constructor(private router: Router) {}

  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
    // this.snappingAnimation();
  }

  ngOnInit(): void {
    // this.snappingAnimation();
  }

  ngAfterViewInit(): void {
    // this.snappingAnimation();
  }

  snappingAnimation() {
    this.router.events.subscribe((event) => {
      console.log(event);
      const tree = this.router.parseUrl(this.router.url);
      if (tree.fragment) {
        const element = document.querySelector('#' + tree.fragment);
        console.log(element);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 500);
        }
      }
    });
  }
}
