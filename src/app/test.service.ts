import { Observable, of } from "rxjs";

import { HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Title } from "./test.model";

@Injectable({
  providedIn:'root'
})

export class TestService{
  constructor(http:HttpClientModule)
  {

  }
  getTitles():Observable<Title[]>{
    return of (
      [
        {name:'Mr',isDefault:false},
        {name:'Mrs',isDefault:false},
        {name:'Miss',isDefault:false},
        {name:'!',isDefault:false},
        {name:'Dr',isDefault:false},
        {name:'Prof',isDefault:false},


      ]);
  }

}
