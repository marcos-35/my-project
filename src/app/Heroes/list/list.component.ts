import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames:string[]=['spiderman','hulk','thor','viuda negra'];
  public deleteHero?:string='';

  removeLastHero():void{
    this.deleteHero = this.heroNames.pop()

  }
}
