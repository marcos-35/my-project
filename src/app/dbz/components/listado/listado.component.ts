import { Character } from './../../interfaces/chracter.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dbz-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {

  @Input()
    public CharacterList:Character[]=[{

      name:'trunks',
      power:10
    }];
    @Output()
    public onDelete:EventEmitter <string>=new EventEmitter();

    deleteCharacterById(id?:string):void{
    if (!id) return;
      console.log({id})
      this.onDelete.emit(id);

    }
  }
