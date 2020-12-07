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
      desc: 'NodeJs , PHP , Laravel , Symphony , .NetCore',
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
      desc: 'Godot , Unity3D , Blender , Photoshop , AfterEffect ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
