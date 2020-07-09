import { Component, OnInit } from '@angular/core';
import { Skill } from '../shared/Skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      title: 'Front-End',
      desc: 'HTML , CSS , SCSS , JS , Angular , React',
    },
    {
      title: 'Back-End Servers',
      desc: 'NodeJs , PHP , Laravel , Symphony , JEE , .NetCore',
    },
    {
      title: 'Databases',
      desc: 'MongoDB , MySQL , PostgreSQL',
    },
    {
      title: 'Software Development',
      desc: 'Python , C# , JAVA , C/C++',
    },
    {
      title: 'Mobile Apps',
      desc: 'Android Studio , React Native ',
    },
    {
      title: 'Other',
      desc: 'Unity3D , Blender , GIMP , Photoshop , AfterEffect, Premiere ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
