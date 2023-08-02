import { Component,Input,Output,EventEmitter, OnInit,OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private deboucerSubscription?: Subscription;

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  @Input()
  public placeholder:string = '';

  @Input()
  public initialValue:string = '';

  ngOnInit(): void {
    this.deboucerSubscription= this.debouncer
    .pipe(
      debounceTime(300)
      )
      .subscribe( value =>{
        this.onDebounce.emit( value );
      })
    }

    ngOnDestroy(): void {
      this.deboucerSubscription?.unsubscribe();
    }

  emitValue( value:string ):void{
    this.onValue.emit( value )
  }

  onKeyPress( serchTerm: string ){
    this.debouncer.next( serchTerm )
  }

}
