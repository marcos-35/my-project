import { Component } from "@angular/core";

@Component({
  selector:"app-counter",
  template:`<h2>counter {{counter}} </h2>
  <button (click)="increaseBy(+1)">+1</button>
 <button (click)="increaseBy(-1)">-1</button>
 <button (click)="restartBy()">Restart</button>`

})
export class CounterComponent{
  public  title:string  = 'my-project';
  public counter:number=10;
  increaseBy(value:number):void{
   this.counter += value;
  }
  restartBy(){
   this.counter=10;
  }
}
