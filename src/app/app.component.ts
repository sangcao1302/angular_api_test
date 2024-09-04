import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { api } from './axiosConfig';
import { NgFor } from '@angular/common';

type film={ 
    
    _id:string,name:string,
    origin_name
    :string
   

}
interface b {
  status:string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

data:film[]=[
  {_id:"",name:"",
  origin_name:""}
]
  flimdetail:b[]=[]

  constructor(){
    this.getData()
  }
 
  async getData(){
    try{
      const response=await api.get('?page=2')
     this.data=response.data.items
      this.flimdetail.push(response.data)
      console.log(this.data)
      console.log(this.flimdetail)
    }catch(error){
      console.log(error)
    }
  }
}
