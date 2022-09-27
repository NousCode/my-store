import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { GridComponent } from './pages/grid/grid.component';
import { LayotComponent } from './components/layot/layot.component';


@NgModule({
  declarations: [
    TasksComponent,
    GridComponent,
    LayotComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
