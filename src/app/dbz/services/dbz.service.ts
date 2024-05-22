import { Injectable } from '@angular/core';
import { Character } from '../interfaces/chracter.interface';
import {v4 as uuid} from 'uuid';
@Injectable({providedIn: 'root'})
export class DbzService {
  public characters:Character[]= [{
    id:uuid(),
    name:'Krillin',
    power:5000
  },{
    id:uuid(),
    name:'goku',
    power:10000
  },{
    id:uuid(),
    name:'vegetta',
    power:9000
  },
  {
    id:uuid(),
    name:'Picoro',
    power:6000
  },
  {
    id:uuid(),
    name:'gojan'
    , power:4000
  }
];
addCharacter(Character:Character):void{
  const newCharacter:Character={
    id:uuid(),...Character
  }
  this.characters.push(newCharacter);
  console.log(newCharacter)
}
//onDeleteCharacter(index:number):void{
 //this.characters.splice(index,1);
 deleteCharacterById( id:string ) {
  this.characters = this.characters.filter( character => character.id !== id );
}



}
