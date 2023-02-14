import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { BlogComponent } from './features/blog/blog.component';
import { DiscoverComponent } from './features/discover/discover.component';
import { MainComponent } from './features/main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'discover',
    component: DiscoverComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
