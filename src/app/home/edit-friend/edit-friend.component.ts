import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-edit-friend',
  templateUrl: './edit-friend.component.html',
  styleUrls: ['./edit-friend.component.scss'],
})
export class EditFriendComponent implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private fb: FormBuilder
  ) {}

  friend: any;
  friendForm: FormGroup;
  message: string;
  isToastOpen = false;

  ngOnInit() {
    this.friend = this.navParams.data;

    this.friendForm = this.fb.group({
      name: [this.friend.name, [Validators.required]],
      like: [this.friend.like, [Validators.required]],
      dislike: [this.friend.dislike, [Validators.required]],
      isFavourite: [this.friend?.isFavourite, [Validators.required]],
    });
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    if (this.friendForm.valid) {
      this.friend.name = this.friendForm.value.name;
      this.friend.like = this.friendForm.value.like;
      this.friend.dislike = this.friendForm.value.dislike;
      this.friend.isFavourite = this.friendForm.value.isFavourite;

      delete this.friend.modal;

      return this.modalCtrl.dismiss(this.friend, 'confirm');
    }

    this.message = 'Invalid form.';
    this.isToastOpen = true;

    return;
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}
