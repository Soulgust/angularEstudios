import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public charactersList:Character[]=[{
    id: '',
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(index:number):void{
    console.log({index});
  }

  emitDeleteById(id?:string):void{
    if(!id) return;
    this.onDeleteById.emit(id);

  }

}
