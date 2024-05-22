import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/chracter.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter:EventEmitter <Character> = new EventEmitter();

  public Character:Character={
    name:'',
    power:0
  };

  emitCharacter():void{
    //debugger;
    if (this.Character.name.length ===0)return;

    this.onNewCharacter.emit(this.Character);

    console.log(this.Character);
    this.Character={name:'',power:0}
  }

}
