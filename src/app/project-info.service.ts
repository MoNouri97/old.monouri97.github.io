import { Injectable } from '@angular/core';
import { Project } from './shared/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectInfoService {
  projectsList: Project[] = [
    {
      name: 'A* Pathfinding',
      tags: ['Algorithm', 'React'],
      code: 'https://github.com/MoNouri97/a-star',
      screenshot:
        'https://raw.githubusercontent.com/MoNouri97/a-star/master/images/image1.png',
      preview: 'https://monouri97.github.io/a-star/',
    },
    {
      name: 'Pharmatek',
      tags: ['NodeJs', 'React', 'MongoDb'],
      code: 'https://gitlab.com/fbenkhlifa/pharmatek/-/tree/develop',
      screenshot:
        'https://gitlab.com/fbenkhlifa/pharmatek/-/raw/develop/screenshots/Screenshot1.png',
    },
    {
      name: 'Angular Boards',
      tags: ['FrontEnd', 'BulmaCSS', 'Angular', 'AngularCDK'],
      code: 'https://github.com/MoNouri97/angular-boards/tree/develop',
      screenshot:
        'https://raw.githubusercontent.com/MoNouri97/angular-boards/develop/screenshots/thumb.png',
      preview: 'https://boards-trello-clone.web.app/',
    },
    {
      name: 'React Notes',
      tags: ['FrontEnd', 'BulmaCSS', 'React'],
      code: 'https://github.com/MoNouri97/react-notes',
      screenshot:
        'https://raw.githubusercontent.com/MoNouri97/react-notes/master/screenshots/thumb.png',
    },

    {
      name: 'Angular Notes',
      tags: ['FrontEnd', 'BulmaCSS', 'Angular'],
      code: 'https://github.com/MoNouri97/angular-notes',
      screenshot:
        'https://raw.githubusercontent.com/MoNouri97/angular-notes/master/screenshots/thumb.png',
      preview: 'https://monouri97.github.io/angular-notes/',
    },
    {
      name: 'TopDown Shooter',
      tags: ['GameDev', 'Unity'],
      code: 'https://github.com/MoNouri97/SimpleShooter',
      screenshot:
        'https://raw.githubusercontent.com/MoNouri97/SimpleShooter/master/Images/thumb.png',
    },
    {
      name: 'Laravel Blog',
      tags: ['Web', 'Laravel', 'PHP', 'MySQL'],
      code: 'https://github.com/MoNouri97/laravelWebProoject',
      screenshot:
        'https://raw.githubusercontent.com/MoNouri97/laravelWebProoject/master/Screenshots/1.png',
    },
    {
      name: 'Portfolio',
      tags: ['Web', 'Angular', 'TailwindCss'],
      code: 'https://github.com/MoNouri97/angular_portfolio',
      screenshot: '../../assets/img/banner/undraw_dev_productivity_umsq.png',
    },
  ];
  constructor() {}

  getAll() {
    return [...this.projectsList];
  }
}
