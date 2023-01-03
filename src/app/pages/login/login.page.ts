import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usr!:string;
  pwd!:string;

  constructor( private log:LoginService) { }

  ngOnInit() {
  }

  login(){
    console.log(this.usr);
    console.log(this.pwd);
    this.log.validateCredentials(this.usr,this.pwd);
  }

}
