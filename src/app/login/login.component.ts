import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  operation: string = 'login';
  email: string = null;
  password: string = null;
  nick: string;
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  login(){
    this.authenticationService.loginWithEmail(this.email, this.password).then(
      (data) => {
        alert("Logueado correctamente");
        console.log(data);
        this.router.navigate(['home']);
      }).catch( (error) => {
        alert("Ocurrió un error");
        console.log(error);
      });
  }

  register(){
    this.authenticationService.registerWithEmail(this.email, this.password).then(
      (data) => {
        const user = {
          uid: data.user.uid,
          email: this.email,
          nick: this.nick
        };
        this.userService.createUser(user).then((dat) => {
          alert("Registrado correctamente");
          console.log(data);
        }).catch( (error) => {
          alert("Ocurrio un error");
          console.log(error);
        });

      }).catch( (error) => {
        alert("Ocurrió un error");
        console.log(error);
      });
  }

}
