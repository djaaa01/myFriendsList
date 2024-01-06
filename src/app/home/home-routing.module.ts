import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { FriendsListComponent } from './friends-list/friends-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'friends-list',
    component: FriendsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
