import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from './service/user.service';

interface user{
  name: string,
  username: string,
  email: string,
  address: string,
  phoneNo: number,
  company: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 
})

export class AppComponent{
  title = 'user-information';
  currentDate = new Date();
  userInfo: any = {};
  constructor(private userServ: UserService){}
  ngOnInit():void {
    this.getUserDetails();
  }
  getUserDetails(){
    this.userServ.getUserDetails().subscribe((response: any)=>{
      this.userInfo = response;
    })
  }
}
