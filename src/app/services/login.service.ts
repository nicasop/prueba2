import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private toast:ToastController, private nav:NavController) { }

  saveCredentials(user: string, pwd: string){
    localStorage.setItem('user',user);
    localStorage.setItem('pwd',pwd);
  }

  validateCredentials(_user: string, _pwd:string){
    const user = localStorage.getItem("user") || 'admin';
    const pwd = localStorage.getItem("pwd") || 'admin';
    if (user == _user && pwd == _pwd){
      // console.log('Credenciales Correctas');
      this.presentToast('Bienvenido')
      this.nav.navigateForward('/tabs/tab1')
    }
    else{
      // console.log('Credenciales Incorrectas');
      this.presentToast('Credenciales Incorrectas')
    }
  }

  async presentToast(message:string) {
    const toast = await this.toast.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });
    await toast.present();
  }

}
