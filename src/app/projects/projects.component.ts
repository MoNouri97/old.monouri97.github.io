import { Component, OnInit } from '@angular/core';

class Project {
  constructor(
    public name,
    public tags,
    public code,
    public screenshot,
    public preview?
  ) {}
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectsList: Project[];
  constructor() {
    this.projectsList = [
      new Project(
        'React Notes',
        ['FrontEnd', 'React'],
        'https://github.com/MoNouri97/react-notes',
        'https://raw.githubusercontent.com/MoNouri97/react-notes/master/screenshots/Screenshot%20from%202020-04-29%2020-48-38.png'
      ),
      new Project(
        'Angular Boards',
        ['FrontEnd', 'Angular'],
        'https://github.com/MoNouri97/angular-boards/tree/develop',
        'https://raw.githubusercontent.com/MoNouri97/angular-boards/develop/screenshots/Screenshot%20from%202020-04-17%2023-30-10.png'
      ),
      new Project(
        'Angular Notes',
        ['FrontEnd', 'Angular'],
        'https://github.com/MoNouri97/angular-notes',
        'https://raw.githubusercontent.com/MoNouri97/angular-notes/master/screenshots/Screenshot%20from%202020-04-07%2023-33-22.png'
      ),
      new Project(
        'TopDown Shooter',
        ['GameDev', 'Unity'],
        'https://github.com/MoNouri97/SimpleShooter',
        'https://raw.githubusercontent.com/MoNouri97/SimpleShooter/master/Images/image.png'
      ),
      new Project(
        'Laravel Blog',
        ['Web', 'Laravel', 'PHP', 'MySQL'],
        'https://github.com/MoNouri97/laravelWebProoject',
        'https://raw.githubusercontent.com/MoNouri97/laravelWebProoject/master/Screenshots/1.png'
      ),
    ];
  }

  ngOnInit(): void {}
}
