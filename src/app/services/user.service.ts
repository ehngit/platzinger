import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[];

  constructor(
    private angularFireDatabase: AngularFireDatabase
    ) {

      let usuario1: User = {
        nick: 'Eduardo',
        age: 28,
        email: 'ed@aoe.aoe',
        friend: true,
        uid: 1
      };
      let usuario2: User = {
        nick: 'Freddy',
        age: 28,
        email: 'fred@aoe.aoe',
        friend: true,
        uid: 2
      };
      let usuario3: User = {
        nick: 'Yuliana',
        age: 18,
        email: 'yuli@aoe.aoe',
        friend: true,
        uid: 3
      };
      let usuario4: User = {
        nick: 'Ricardo',
        age: 17,
        email: 'rick@aoe.aoe',
        friend: false,
        uid: 4
      };
      let usuario5: User = {
        nick: 'Marcos',
        age: 30,
        email: 'marcos@aoe.aoe',
        friend: false,
        uid: 5
      };
      this.friends = [usuario1, usuario2, usuario3, usuario4, usuario5];




    }
  getUsers() {
    return this.angularFireDatabase.list('/users');
  }
  getUserById(uid) {
    return this.angularFireDatabase.object('/users/' + uid);
  }
  createUser(user) {
    return this.angularFireDatabase.object('/users/' + user.uid).set(user);
  }
  editUser(user) {
    return this.angularFireDatabase.object('/users/' + user.uid).set(user);
  }
  setAvatar(avatar, uid) {
    return this.angularFireDatabase.object('/users/' + uid + '/avatar').set(avatar);
  }
  addFriend(userId, friendId) {
    this.angularFireDatabase.object('users/' + userId + '/friends/' + friendId).set(friendId);
    return this.angularFireDatabase.object('users/' + friendId + '/friends/' + userId).set(userId);
  }




  getFriends() {
    return this.friends;
  }



}
