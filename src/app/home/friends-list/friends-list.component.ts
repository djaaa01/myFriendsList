import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/core/services/auth.service';
import { MainService } from '../core/services/main.service';
import { ModalController } from '@ionic/angular';
import { AddFriendComponent } from '../add-friend/add-friend.component';
import { EditFriendComponent } from '../edit-friend/edit-friend.component';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent implements OnInit {
  friends: Array<any> = [];
  result: Array<any> = [];

  constructor(
    private authService: AuthService,
    private readonly mainService: MainService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.mainService.getCollention<any>('friends').subscribe((response) => {
      this.friends = response;
      this.result = this.friends.sort(function (a, b) {
        return b.createdDate - a.createdDate;
      });
    });
  }

  async onEdit(friend: any) {
    const modal = await this.modalCtrl.create({
      component: EditFriendComponent,
      componentProps: friend,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.mainService.update(data, 'friends').then((response) => {});
    }
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddFriendComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.mainService
        .addCollentionData<any>('friends', {
          createdDate: new Date(),
          dislike: 0,
          like: 0,
          name: data,
          userUID: this.authService.getCurrentUse()?.uid,
        })
        .then((response) => {});
    }
  }

  onLike(event: any) {
    event.like += 1;
    this.mainService.update(event, 'friends').then((response) => {});
  }

  onDislike(event: any) {
    event.dislike += 1;
    this.mainService.update(event, 'friends').then((response) => {});
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.result = this.friends.filter(
      (d) => d.name.toLowerCase().indexOf(query) > -1
    );
  }

  onLogout(): void {
    this.authService.logout();
  }
}
