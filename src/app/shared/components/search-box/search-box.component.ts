import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Output()
  public onValue = new EventEmitter<string>();

  @Input()
  public placeholder:string = '';

  emitValue( value:string ):void{
    this.onValue.emit( value )
  }


}
