import { Component, Input, OnInit } from '@angular/core';


import gsap from 'gsap';
import { MotionPathPlugin, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

@Component({
    selector: 'app-ufo',
    templateUrl: './ufo.component.html',
    styleUrls: ['./ufo.component.scss']
  })

export class UfoComponent implements OnInit {
    ngOnInit(): void {
        
    }
}