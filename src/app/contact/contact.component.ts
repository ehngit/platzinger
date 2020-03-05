import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../interfaces/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  friendId: any;
  friend: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService) {
      this.friendId = this.activatedRoute.snapshot.params.uid;
      console.log(this.friendId);
      this.userService.getUserById(this.friendId).valueChanges().subscribe((data: User) => {
      this.friend = data;
  }, (error) => {
    console.log(error);
  });
}

  ngOnInit(): void {
  }

}
