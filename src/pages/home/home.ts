import { Component } from '@angular/core';
import { NavController  , ModalController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { ThreePage } from '../three/three';
import { FourPage } from '../four/four';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data1 : any;
  data2 : any;

  constructor(public navCtrl: NavController , public modalController:ModalController) {

  }


  next(){
    this.navCtrl.push(SecondPage , {param1  : this.data1});
  }


  next2(){
    let modal = this.modalController.create(ThreePage);
    modal.onDidDismiss((data)=>{
        this.data2 = data;
        console.log(this.data2);
    });
    modal.present();
  }





}
