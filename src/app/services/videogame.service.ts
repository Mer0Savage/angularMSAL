import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Videogame } from '../class/videogame';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  constructor(
    private http: HttpClient
  ) { }

  readonly baseURL = "http://localhost:5179/api/videogame"

  getVideogameList(): Observable<Videogame[]> {
    var result = this.http.get<Videogame[]>(this.baseURL+"/GetAllVideogames");
    console.log(result);
    return result;
  }
  getVideogameFromId(id:number): Observable<Videogame> {
    var result = this.http.get<Videogame>(`${this.baseURL}/${id}`);
    return result;
  }
  getCompanies():Observable<string[]>{
    var companies = this.http.get<string[]>(this.baseURL+"/GetDistinctCompanies");
    console.log(companies);
    return companies;
  }
  addVideogame(videogame:Videogame)
  {
    return this.http.post(this.baseURL,videogame);
  }
  updateVideogame(videogame:Videogame)
  {
    return this.http.put(this.baseURL,videogame);
  }
  //delete wont work without subscribe
  deleteVideogame(id:string)
  {
    return this.http.delete(this.baseURL+"?id="+id).subscribe(()=>{});
  }

}
