import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ProjectInfoService } from '../project-info.service';
import { Project } from '../shared/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  @ViewChild('pSection') pSection: ElementRef;

  projectsList: Project[];

  constructor(private projectService: ProjectInfoService) {}
  ngOnInit(): void {
    this.projectsList = this.projectService.getAll();
  }

  scrollIntoView() {
    this.pSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
