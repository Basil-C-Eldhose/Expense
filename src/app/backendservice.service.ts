import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
  
})
export class BackendserviceService {

  constructor(private http:HttpClient) { }
  expenseentry(data:any)
  {
    this.http.post("https://localhost:7234/api/Expense/expenseentry", data).toPromise().then(result => { console.log(result); })
  }
  categoryentry(data:any)
  {
    this.http.post("https://localhost:7234/api/Expense/categoryentry", data).toPromise().then(result => { console.log(result); })
  }
  viewcategory()
  {
    return this.http.get<any>("https://localhost:7234/api/Expense/categoryview")
  }
  searchdate(datestart:any,dateend:any)
  {
    console.log(dateend)
    console.log(datestart)
    return this.http.get<any>(`https://localhost:7234/api/Expense/datesearch?datestart=${datestart}&dateend=${dateend}`)
    // .toPromise().then(result => { console.log(result); })
  }
}
