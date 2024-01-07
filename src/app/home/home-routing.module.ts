import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendsListComponent } from './friends-list/friends-list.component';

const routes: Routes = [
  {
    path: 'friends-list',
    component: FriendsListComponent,
  },
  { path: '**', component: FriendsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
