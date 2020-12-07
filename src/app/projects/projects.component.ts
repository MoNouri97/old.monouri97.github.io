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

  filteredProjects: Project[];
  projectsList: Project[];
  tags: { name: string; number: number }[];
  activeTag: string = '';

  constructor(private projectService: ProjectInfoService) {}

  ngOnInit(): void {
    this.projectsList = this.projectService.getAll();
    this.filteredProjects = [...this.projectsList];
    this.tags = ['Web', 'GameDev', 'Mobile'].map((tag) => {
      return {
        name: tag,
        number: this.projectsWithTag(tag).length,
      };
      // return `${tag}(${this.projectsWithTag(tag).length})`;
    });
  }

  scrollIntoView() {
    this.pSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  setActive(tag: string) {
    if (tag == this.activeTag) {
      this.activeTag = '';
      this.filteredProjects = [...this.projectsList];
      return;
    }
    this.activeTag = tag;
    this.filteredProjects = this.projectsWithTag(tag.split('(')[0]);
  }

  projectsWithTag(tag: string) {
    return this.projectsList.filter((val) => {
      return val.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase());
    });
  }
}
