import { Injectable } from '@angular/core';
import { Project } from './shared/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectInfoService {
  projectsList: Project[] = [
    {
      name: 'A* Pathfinding',
      tags: ['Web', 'Algorithm', 'React'],
      code: 'https://github.com/MoNouri97/a-star',
      screenshot:
        'https://raw.githubusercontent.com/MoNouri97/a-star/master/images/image1.png',
      preview: 'https://monouri97.github.io/a-star/',
    },
    {
      name: 'NotReddit',
      tags: ['Web', 'NodeJs', 'React', 'NextJs', 'GraphQl'],
      code: 'https://github.com/MoNouri97/node-graphQL-server',
      screenshot:
        'https://github.com/MoNouri97/node-graphQL-server/blob/master/assets/New%20Project%20(1).png?raw=true',
    },
    {
      name: 'Movies Explorer',
      tags: ['Web', 'NextJs', 'React', 'Sanity CMS', 'TmdbAPI'],
      code: 'https://github.com/MoNouri97/nextjs-movies',
      screenshot:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FN%2Fnext-js-logo-7929BCD36F-seeklogo.com.png&f=1&nofb=1',
      preview: 'https://nextjs-movies-explorer.netlify.app',
    },
    {
      name: 'Pharmatek',
      tags: ['Web', 'NodeJs', 'React', 'MongoDb'],
      code: 'https://gitlab.com/mohamed.nouri.1997/pharmatek/-/tree/develop',
      screenshot:
        'https://gitlab.com/mohamed.nouri.1997/pharmatek/-/raw/develop/screenshots/Screenshot1.png',
    },
    {
      name: 'IssatTimes',
      tags: ['ReactNative', 'Mobile'],
      code: 'https://github.com/MoNouri97/IssatTimes',
      screenshot:
        'https://github.com/MoNouri97/IssatTimes/blob/master/assets/Screenshot_20201207-222454_Expo.jpg?raw=true',
      preview: 'https://expo.io/@monouri/projects/IssatTimes',
    },
    {
      name: 'Angular Boards',
      tags: ['Web', 'FrontEnd', 'BulmaCSS', 'Angular', 'AngularCDK'],
      code: 'https://github.com/MoNouri97/angular-boards/tree/develop',
      screenshot:
        'https://raw.githubusercontent.com/MoNouri97/angular-boards/develop/screenshots/thumb.png',
      preview: 'https://boards-trello-clone.web.app/',
    },
    {
      name: 'Messenger',
      tags: ['Web', 'React', 'Firebase'],
      code: 'https://github.com/MoNouri97/messenger-clone',
      screenshot:
        'https://raw.githubusercontent.com/MoNouri97/messenger-clone/master/images/image1.png',
      preview: 'https://messenger-clone-nouri.web.app/',
    },
    {
      name: 'React Notes',
      tags: ['Web', 'FrontEnd', 'BulmaCSS', 'React'],
      code: 'https://github.com/MoNouri97/react-notes',
      screenshot:
        'https://raw.githubusercontent.com/MoNouri97/react-notes/master/screenshots/thumb.png',
    },

    {
      name: 'Angular Notes',
      tags: ['Web', 'FrontEnd', 'BulmaCSS', 'Angular'],
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
      name: 'Jump & Shoot',
      tags: ['GameDev', 'Godot', 'GDScript', 'Itch.io'],
      code: 'https://github.com/MoNouri97/JumtAndShoot',
      screenshot:
        'https://img.itch.zone/aW1hZ2UvNzc1NjgwLzQzNDE3NjQucG5n/original/2uL09J.png',
      preview: 'https://monouri.itch.io/jumpandshoot',
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
