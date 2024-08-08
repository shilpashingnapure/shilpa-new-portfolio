import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChildren('card') projectCards: QueryList<ElementRef>;

  topThreeProjects = [
    {
      name: 'Instagram Clone',
      techStack: [
        'react.png',
        'ts.png',
        'node.webp',
        'express.webp',
        'postgresql.png',
        'tailwind.png',
      ],
      imgs: ['dialog-post.png', 'insta-feed.png', 'insta-profile.png'],
      link: {
        visit: 'https://photo-grammm.vercel.app/',
        github: 'https://github.com/shilpashingnapure/instagram_clone',
        demo: '',
      },
      description: {
        intro:
          'This project is a clone of Instagram, designed to replicate its core functionalities and user interface',
        features: [
          'sign up / login',
          'upload/delete post , comment',
          'like the posts',
          'user profile management , search for users',
        ],
      },
    },
    {
      name: 'Snakes & Ladders Game',
      techStack: ['react.png', 'html.png', 'css.png', 'js.png', 'ts.png'],
      imgs: ['snakeAndLaddar.png'],
      link: {
        visit: 'https://snake-and-laddar-game.vercel.app/',
        github: 'https://github.com/shilpashingnapure/snake-And-Laddar-Game',
        demo: '',
      },
      description: {
        intro:
          'Snake & Ladder is board Game Played between Two or more players',
        features: [
          'Game board can initialize dynamically',
          'player supportes more then two upto 4 players',
          'snake & laddar have dynamic position on board.',
          'move pieces based on dice rolls dynamically',
          'for dice 6 , player gets play again upto 3 extra turns',
        ],
      },
    },
    {
      name: '2048 Game',
      techStack: ['react.png', 'html.png', 'css.png', 'js.png', 'ts.png'],
      imgs: ['2048Game.png'],
      link: {
        visit: 'https://2048-game-nu.vercel.app/',
        github: 'https://github.com/shilpashingnapure/2048-game',
        demo: 'https://www.youtube.com/embed/4qF2drOWnpc',
      },
      description: {
        intro:
          'A project is about to 2048 Game, implemented using a low-level design approach',
        features: [
          'Game board can initialize dynamically',
          'dynamically winning number & base number',
          'start/restart game',
        ],
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.projectCardAnimation();
  }

  projectCardAnimation() {
    let cumulativeHeight = 0;
    this.projectCards.forEach((card, index) => {
      const cardElement = card.nativeElement;
      const cardId = `#project-${index + 1}`;

      // to get previous card height
      cardElement.style.top = `${cumulativeHeight}px`;

      cumulativeHeight += cardElement.offsetHeight;

      if (index + 1 < this.projectCards.length) {
        gsap.from(cardId, {
          scrollTrigger: {
            trigger: cardId,
            start: '20% center',
            end: 'bottom',
            scrub: true,
            toggleActions: 'restart',
          },
          rotationX: 180,
          x: 5,
          opacity: 0.7,
          duration: 1,
        });
      }
    });
  }
}
