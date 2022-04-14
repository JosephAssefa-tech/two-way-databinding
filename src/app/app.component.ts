import { Component } from '@angular/core';
import { TestService } from './test.service';
import { Title } from './test.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post='';
  parentpost:any[]=[];
  values="joseph";
  public title: Title[]=[];
  constructor(private titleService:TestService)
  {355

  }
  ngOnInit():void {
    console.log("data");
this.titleService.getTitles().subscribe((response)=>{
this.title=response.filter((r)=>r.name!='!').sort((a,b)=>a.name.localeCompare(b.name));
});

}
passData(data:any)
{
  console.log(this.post);
  this.parentpost.push(this.post);
}
childEvent(data:any)
{
  alert(data)
}
binding()
{

}
}
