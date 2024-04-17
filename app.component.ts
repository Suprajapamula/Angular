import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{ 
  public mainContainer:any= {
    "display":"flex",
    "flex-direction":"column",
    "justify-content":"center",
    "align-items":"center",
  }
  public internalContainer:any={
    "display":"flex",
    "flex-direction":"column",
    "justify-content":"center",
    "align-items":"center",
    "border":"1px solid black",
    "padding":"50px"
  }
  public count:number=0;
  dec(){
    this.count--
    this.selectedColor()
  }
  reset(){
    this.count=0;
    this.selectedColor()
  }
  inc(){
    this.count++;
    this.selectedColor()
  }
  
  public selected:any={}
  selectedColor(){
    if(this.count==0){
      this.selected={
        "color":"red"
      }
    }
    else if(this.count>0){
      this.selected={
        "color":"green"
      }
    }
    else{
      this.selected={
        "color":"yellow"
      }
    }
  }
  ngOnInit(): void {
    this.selectedColor()
    console.log(this.count)
  }
}
 