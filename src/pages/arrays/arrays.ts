import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ArraysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-arrays',
  templateUrl: 'arrays.html',
})
export class ArraysPage {

  originalArray : any;
  modifiedArray : any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.originalArray = [
      {name : "name1" , number : 100 , avatar : "http://placehold.it/100"},
      {name : "name2" , number : 200 , avatar : "http://placehold.it/100"},
      {name : "name3" , number : 300 , avatar : "http://placehold.it/100"},
      {name : "name4" , number : 400 , avatar : "http://placehold.it/100"},
      {name : "name5" , number : 500 , avatar : "http://placehold.it/100"},
    ];
    this.modifiedArray = JSON.parse(JSON.stringify(this.originalArray)); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArraysPage');
  }


  reset(){
      this.modifiedArray = JSON.parse(JSON.stringify(this.originalArray)); 
  }


  filterData(){
    this.modifiedArray = this.modifiedArray.filter((data)=>{
            return data.number > 300 ;
      });
  }


  map(){
    this.modifiedArray = this.modifiedArray.map((data)=>{
      data.name = data.name.toUpperCase();
      data.number = data.number * 10;
      return data;
    });
  }


  reduce(){
    let some = this.modifiedArray.reduce((previous , current)=>{
    let prevResult = Number.isInteger(previous) ? previous : previous.number;
        return prevResult + current.number;
      });
    console.log("cala all numers: "  , some);
    
    let most = this.modifiedArray.reduce((previous , current)=>{
        let prefResult = Number.isInteger(previous) ? previous : previous.number;
        let max = Math.max(prefResult , current.number);
        return max;
    });
    console.log("max number: "  , most);
  }


}
