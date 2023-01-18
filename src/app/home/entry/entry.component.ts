import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {
  DataArray:any
  constructor(private fb:FormBuilder,private backendservice:BackendserviceService){}
  Entryform=this.fb.group({
    description:[''],
    amount:[''],
    category:[''],
    date:['']
  })
  onSubmit()
  {
    this.backendservice.expenseentry(this.Entryform.value)
    console.log(this.Entryform.value)
  }
  ngOnInit()
  {
    this.backendservice.viewcategory().subscribe((res) => {
    this.DataArray=res
    })
  }

}
