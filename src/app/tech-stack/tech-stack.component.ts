import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
})
export class TechStackComponent implements OnInit {
  constructor() {}

  techIcons = [
    {
      name: 'JavaScript',
      icon: 'js.png',
    },
    {
      name: 'TypeScript',
      icon: 'ts.png',
    },
    {
      name: 'Node.js',
      icon: 'node.webp',
    },
    {
      name: 'React',
      icon: 'react.png',
    },
    {
      name: 'Angular',
      icon: 'angular.svg',
    },
    {
      name: 'Nest.js',
      icon: 'nestjs.png',
    },
    {
      name : 'Express.js' , 
      icon : 'express.webp'
    },
    {
      name: 'HTML',
      icon: 'html.png',
    },
    {
      name: 'CSS',
      icon: 'css.png',
    },
    {
      name: 'Scss',
      icon: 'sass.webp',
    },
    {
      name: 'GraphQL',
      icon: 'graphql.png',
    },
    {
      name: 'PstgreSQL',
      icon: 'postgresql.png',
    },
    {
      name: 'MongoDB',
      icon: 'mongodb.png',
    },
    {
      name: 'Python',
      icon: 'python.webp',
    },
    {
      name: 'Django',
      icon: 'dj.jpeg',
    },
    {
      name: 'Bootstrap',
      icon: 'bootstrap.svg',
    },
    {
      name : 'Tailwind' , 
      icon : 'tailwind.png',
    }
  ];

  ngOnInit(): void {}
}
