import { Component, ElementRef, ViewChild } from '@angular/core';

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
export class ProjectsComponent {
  projectsList: Project[] = [
    new Project(
      'React Notes',
      ['FrontEnd', 'BulmaCSS', 'React'],
      'https://github.com/MoNouri97/react-notes',
      'https://raw.githubusercontent.com/MoNouri97/react-notes/master/screenshots/thumb.png'
    ),
    new Project(
      'Angular Boards',
      ['FrontEnd', 'BulmaCSS', 'Angular', 'AngularCDK'],
      'https://github.com/MoNouri97/angular-boards/tree/develop',
      'https://raw.githubusercontent.com/MoNouri97/angular-boards/develop/screenshots/thumb.png',
      'https://boards-trello-clone.web.app/'
    ),
    new Project(
      'Angular Notes',
      ['FrontEnd', 'BulmaCSS', 'Angular'],
      'https://github.com/MoNouri97/angular-notes',
      'https://raw.githubusercontent.com/MoNouri97/angular-notes/master/screenshots/thumb.png',
      'https://monouri97.github.io/angular-notes/'
    ),
    new Project(
      'TopDown Shooter',
      ['GameDev', 'Unity'],
      'https://github.com/MoNouri97/SimpleShooter',
      'https://raw.githubusercontent.com/MoNouri97/SimpleShooter/master/Images/thumb.png'
    ),
    new Project(
      'Laravel Blog',
      ['Web', 'Laravel', 'PHP', 'MySQL'],
      'https://github.com/MoNouri97/laravelWebProoject',
      'https://raw.githubusercontent.com/MoNouri97/laravelWebProoject/master/Screenshots/1.png'
    ),
    new Project(
      'A* Pathfinding',
      ['Algorithm', 'React'],
      'https://github.com/MoNouri97/a-star',
      'https://raw.githubusercontent.com/MoNouri97/a-star/master/images/image1.png',
      'https://monouri97.github.io/a-star/'
    ),
  ];
  constructor() {}
  @ViewChild('pSection') pSection: ElementRef;

  scrollIntoView() {
    this.pSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
