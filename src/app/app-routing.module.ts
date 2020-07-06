import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'show', loadChildren: () => import('./containers/show/show.conatiner.module').then(m => m.ShowContainerModule) },
  { path: 'blogs', loadChildren: () => import('./containers/blogs-container/blogs-container.module').then(m => m.BlogsContainerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
