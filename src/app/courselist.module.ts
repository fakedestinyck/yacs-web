import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListComponent } from './courselist.component';
import { CourseComponent } from './course.component';
import { SectionComponent } from './section.component';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseComponent,
    SectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CourseListModule {}
