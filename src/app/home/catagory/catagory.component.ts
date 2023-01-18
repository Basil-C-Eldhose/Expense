import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.scss']
})
export class CatagoryComponent {
  constructor(private db:FormBuilder,private backendservice:BackendserviceService){}
  categoryForm=this.db.group({
    category:['']
  })
onSubmit(){
  this.backendservice.categoryentry(this.categoryForm.value)
console.log(this.categoryForm.value)
}
}
