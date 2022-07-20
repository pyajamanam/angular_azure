import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo-azure';
 loggeduserparent = "Pradeeps" ;
ctop:string = '';
 

addItem(newItem: string) {
this.ctop= newItem;
}
}
