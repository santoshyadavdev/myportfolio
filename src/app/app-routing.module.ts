import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'show', loadChildren: () => import('./containers/show/show.conatiner.module').then(m => m.ShowContainerModule) },
  { path: 'blogs', loadChildren: () => import('./containers/blogs-container/blogs-container.module').then(m => m.BlogsContainerModule) },
  { path: 'angular-course', loadChildren: () => import('./containers/courses/angular/angular.module').then(m => m.AngularCourseModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
