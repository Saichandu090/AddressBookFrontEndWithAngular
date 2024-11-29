import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Address, ResponseAddress } from '../model/address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  private baseurl: String = "http://localhost:8080/addressBook/";

  http:HttpClient=inject(HttpClient);

  getBooks(): Observable<ResponseAddress[]> {
    return this.http.get<ResponseAddress[]>(this.baseurl+"allBooks");
  }

  addBook(addressBook: Address) {
    return this.http.post(this.baseurl+'addBook', addressBook);
  }

  deleteBook(id:number):Observable<String> {
    return this.http.delete<String>(this.baseurl+`deleteBook/${id}`);
  }

  updateBook(id:number,addressBook:Address) {
    return this.http.put(this.baseurl+`updateBook/${id}`,addressBook);
  }

}
