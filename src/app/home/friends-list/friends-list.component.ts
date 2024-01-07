import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/core/services/auth.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onLogout(): void {
    this.authService.logout();
  }
}
