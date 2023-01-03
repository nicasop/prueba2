import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  usr!:string;
  pwd!:string;

  constructor(private log:LoginService,private nav:NavController) {}

  changeCredentials(){
    console.log(this.usr);
    console.log(this.pwd);
    this.log.saveCredentials(this.usr,this.pwd);
    this.nav.navigateForward('/tabs/login')
  }

}
