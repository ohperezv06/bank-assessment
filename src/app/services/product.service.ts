import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../commons/entities/products.entities";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<IProduct[]> {
    const headers = new HttpHeaders({
      'AuthorId': '123456789'
    });

    return this.http.get<IProduct[]>(`${this.baseUrl}/bp/products`, {headers});
  }
}
