import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from 'src/app/common-component/dialog-content/dialog-content.component';

@Component({
  selector: 'app-mini-projects',
  templateUrl: './mini-projects.component.html',
  styleUrls: ['./mini-projects.component.scss'],
})
export class MiniProjectsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  miniProjects = [
    {
      name : "Dev Sport Academy",
      stack : ['Next.js','Tailwind'],
      img : 'devSport.png',
      description : 'A real-time project built from scratch for Dev Sport Academy.',
      link: {
        visit: 'https://devsportsacademy.vercel.app/',
      },
    
    },
    {
      name: 'Tic Tac Toe Game',
      stack: ['TypeScript', 'JavaScript', 'React.js'],
      img: 'ticTacToe.png',
      description:
        'A project is about Tic Tac Toe Game, implemented using a low-level design approach',
      link: {
        github: 'https://github.com/shilpashingnapure/tictactoe',
        visit: 'https://tictactoe-tau-orcin.vercel.app/',
        demo: 'https://www.youtube.com/embed/QDsPlfkgS_Y',
      },
    },
    {
      name: 'TradingView Clone',
      stack: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      img: 'tradingView.png',
      description:
        'This is virtual stock platform for backtesting price data and practice strategies. its similar to TV(Tradingview).',
      link: {
        github: 'https://github.com/shilpashingnapure/Tradingview-Alternate',
        visit: 'https://demo-deploying-chart.vercel.app/',
      },
    },
    {
      name: 'Tommy Hilfiger',
      stack: ['HTML', 'CSS', 'React.js'],
      img: 'tommy.JPG',
      description:
        'Clone of TommyHilfiger.com i work on frontend & animation to gain more experience on Css & React.',
      link: {
        github: 'https://github.com/shilpashingnapure/Tommy-Hilfiger-clone',
        visit: 'https://tommyhilfigerclone.netlify.app/',
      },
    },
    {
      name: 'Mailchimp Clone',
      stack: ['nodeJs', 'reactJs', 'mongodb'],
      img: 'mailchimp.PNG',
      description:
        'Mailchimp is a marketing automation platform and email marketing service. users create new/customize email templates, Send templates and keep records.',
      link: {
        github: 'https://github.com/shilpashingnapure/Clone-of-Mailchimp',
        visit: 'https://mailchimp-frontend.vercel.app/',
        demo: 'https://player.vimeo.com/video/756101155?h=e6e013b7d8',
      },
    },
    {
      name: 'Theory Clone',
      stack: ['Javascript', 'CSS', 'EJS'],
      img: 'theory.png',
      description:
        'This is e-commarce webstie,where we add features like add to cart , search , admin page , payment gateway , otp verification etc.',
      link: {
        github: 'https://github.com/shilpashingnapure/Theory_Clone-Backend',
        visit: 'https://theroybackend.onrender.com/',
        demo: 'https://player.vimeo.com/video/689858338?h=1e538fdf27',
      },
    },
    {
      name: 'ForestEssentialsIndia Clone',
      stack: ['HTML', 'CSS', 'JavaScript'],
      img: 'forest-1.gif',
      description:
        'This is e-commarce website , where user can used funtionalites like buy products , add to cart , payment getway etc.',
      link: {
        github: 'https://github.com/shilpashingnapure/forestessentialsindia',
        visit: 'https://shilpashingnapure.github.io/forestessentialsindia/',
        demo: 'https://player.vimeo.com/video/689858253?h=1744dc5262',
      },
    },
    {
      name: 'YouTube Clone',
      stack: ['HTML', 'CSS', 'JavaScript'],
      img: 'youtube.JPG',
      description:
        'Clone of youtube.com using youtube API where user can watch and search videos.',
      link: {
        github: 'https://github.com/shilpashingnapure/youtube-clone',
        visit: 'https://youtube-of-clone.netlify.app/',
      },
    },
    {
      name: 'Github Clone',
      stack: ['HTML', 'CSS', 'JavaScript'],
      img: 'github.JPG',
      description:
        'Clone of github.com using Github API user can search their profiles & Authorization.',
      link: {
        github: 'https://github.com/shilpashingnapure/github-clone',
        visit: 'https://clone-of-github.netlify.app/',
      },
    },
    {
      name: 'Disqus Clone',
      stack: ['HTML', 'CSS'],
      img: 'disqus.JPG',
      description:
        'Clone of Disqus.com i try to make simple frontend & resposive website.',
      link: {
        github: 'https://github.com/shilpashingnapure/Disqus-Clone',
        visit: 'https://disqus-clone.netlify.app/',
      },
    },
    {
      name: 'Food Recipe App',
      stack: ['HTML', 'CSS', 'JavaScript'],
      img: 'recipe.JPG',
      description:
        'Using themealdb API i try to make where user can search any type of food recepie and user friendly steps to understand.',
      link: {
        github: 'https://github.com/shilpashingnapure/Simple-recipe-Website',
        visit: 'https://recipe-of-food-app.netlify.app/',
      },
    },
    {
      name: 'Movie Search App',
      stack: ['HTML', 'CSS', 'JavaScript'],
      img: 'movieapp.JPG',
      description:
        'Movie Rating APP using themoviedb API we can search any movie. find information about movie release date, Imdb rating, etc.',
      link: {
        github: 'https://github.com/shilpashingnapure/movie-search-app',
        visit: 'https://search-app-for-movie.netlify.app/',
      },
    },
    {
      name: 'Codepen Clone',
      stack: ['HTML', 'CSS', 'JavaScript', 'React'],
      img: 'codepen.JPG',
      description:
        'Using themealdb API i try to make where user can search any type of food recepie and user friendly steps to understand.',
      link: {
        github: 'https://github.com/shilpashingnapure/codepen-clone',
        visit: 'https://pencode.netlify.app/',
      },
    },
  ];

  openDialog(videoLink: string) {
    this.dialog.open(DialogContentComponent, {
      width: '650px',
      height: '500px',
      data: {
        link: videoLink,
      },
    });
  }

  scrollPrev() {
    const container = document.querySelector('.mini-projects') as HTMLElement;
    if (container) {
      container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
    }
  }

  scrollNext() {
    const container = document.querySelector('.mini-projects') as HTMLElement;
    if (container) {
      container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
    }
  }
}
