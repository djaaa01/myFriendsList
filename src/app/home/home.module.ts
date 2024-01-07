import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { AddFriendComponent } from './add-friend/add-friend.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, FriendsListComponent, AddFriendComponent],
})
export class HomePageModule {}
