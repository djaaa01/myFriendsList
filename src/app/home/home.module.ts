import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { EditFriendComponent } from './edit-friend/edit-friend.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomePage,
    FriendsListComponent,
    AddFriendComponent,
    EditFriendComponent,
  ],
})
export class HomePageModule {}
