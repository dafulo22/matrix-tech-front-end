import { Injectable } from '@angular/core';
import { Base } from 'base';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProducerService
//extends CrudService<Base, number>
{
  private urlEndPoint: string = 'http://localhost:8080/api/producer/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  /*constructor(private http: HttpClient) {
     super(http, 'http://localhost:8080/api/producer');
     this.findAll = super.findAll();
  }*/
  constructor(private http: HttpClient) { }

  getProducers(): Observable<Base[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Base[])
    );
  }

  create(cliente: Base) : Observable<Base> {
    return this.http.post<Base>(this.urlEndPoint, cliente, {headers: this.httpHeaders})
  }

  getProducer(id): Observable<Base>{
    return this.http.get<Base>(`${this.urlEndPoint}/${id}`)
  }

  update(cliente: Base): Observable<Base>{
    return this.http.put<Base>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Base>{
    return this.http.delete<Base>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}
