import { Component } from '@angular/core';
import { IonicPage ,NavController  , ModalController,Events  } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { ThreePage } from '../three/three';
import { FourPage } from '../four/four';
import { UserProvider } from '../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  data1 : any;
  data2 : any;
  data3 : any;
  data4 : any;

  constructor(public navCtrl: NavController , public modalController:ModalController , public user:UserProvider, public events:Events) {

  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FourPage');
    this.events.subscribe("events" , data =>{
      console.log("Home PAge : " ,data);
    });
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


  next3(){
    this.user.setData(this.data3);
    console.log(this.data3);
  }



  next4(){
    this.data4 = this.user.getData();
    console.log(this.data4);
  }


  next5(){
    this.navCtrl.push(FourPage);
  }



}

