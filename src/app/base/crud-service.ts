import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CrudOperations } from './crud-operations.interface';
import { map } from 'rxjs/operators';

export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(
    protected _http: HttpClient,
    protected _base: string
  ) {}

  save(t: T): Observable<T> {
    return this._http.post<T>(this._base, t, {headers: this.httpHeaders});
  }

  update(id: ID, t: T): Observable<T> {
    return this._http.put<T>(this._base + "/" + id, t, {headers: this.httpHeaders});
  }

  findOne(id: ID): Observable<T> {
    return this._http.get<T>(this._base + "/" + id);
  }

  findAll(): Observable<T[]> {
    return this._http.get<T[]>(this._base).pipe(
      map(response => response as T[])
    )
  }

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(this._base + '/' + id, {headers: this.httpHeaders});
  }

}
