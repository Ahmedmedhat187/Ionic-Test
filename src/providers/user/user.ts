import { Injectable } from '@angular/core';



@Injectable()
export class UserProvider {

  name = 'nameee';
  constructor() {
    console.log('Hello UserProvider Provider');
  }



  setData(data){
    this.name = data;
  }



  getData(){
    return this.name;
  }

}
