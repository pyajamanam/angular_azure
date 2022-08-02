import { AfterViewInit, Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';
import { Hero, HEROES } from './data/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{
  ngAfterViewInit(): void {
   
  }
  title = 'angular-demo-azure';
 loggeduserparent = "Pradeeps" ;
 ctop:string = '';
 @Input() loading = false;
addItem(newItem: string) {
this.ctop= newItem;
}

onSelect(hero:Hero)
{
  console.log(hero);
}
@Input()
heroes = HEROES;
selectedHero?: Hero;
testfromparent:string="testfromparent";
}
