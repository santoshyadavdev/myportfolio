import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'show', loadChildren: () => import('./containers/show/show.conatiner.module').then(m => m.ShowContainerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
