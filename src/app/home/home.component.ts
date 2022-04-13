import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() childPosts:any[]=[];
@Output() passedEvent=new EventEmitter();
data:string="child data sent to home";
  constructor() { }

  ngOnInit(): void {
  }
  passEvent()
  {
    this.passedEvent.emit(this.data);


  }

}
