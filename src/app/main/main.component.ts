import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit {
  @ViewChild(ProjectsComponent) pSection: ProjectsComponent;
  @ViewChild(ContactComponent) cSection: ContactComponent;

  constructor() {}

  ngAfterViewInit() {}

  scrollTo(dest) {
    if (dest === 'projects') {
      this.pSection.scrollIntoView();
      return;
    }
    if (dest === 'contact') this.cSection.scrollIntoView();
  }
}
