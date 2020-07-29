import { Injectable } from '@angular/core';
import { Rental } from './rental';
import { Observable } from 'rxjs';
import { _throw as throwError } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable()
export class RentalService {
  private urlEndPoint: string = 'http://localhost:8080/api/rental';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) { }

  getRentals(): Observable<Rental[]> {
    return this.http.get(`${this.urlEndPoint}/`).pipe(
      tap(response => {
        let rentas = response as Rental[];
        console.log('RentalService: tap 1');
        rentas.forEach(rentas => {
          console.log(rentas.id);
        });
      }),
      map(response => {
        let rentas = response as Rental[];
        return rentas.map(rentas => {
          return rentas;
        });
      }
      ),
      tap(response => {
        console.log('RentalService: tap 2');
        response.forEach(rentas => {
          console.log(rentas.id);
        });
      })
    )
  }

  create(rentas: Rental) : Observable<Rental> {
    return this.http.post<Rental>(`${this.urlEndPoint}/`, rentas, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.rentas as Rental),
      catchError(e => {

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );

  }

  getRental(id): Observable<Rental>{
    return this.http.get<Rental>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/rentas']);
        console.error(e.error.mensaje);
        swal('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );

  }

  update(rentas: Rental): Observable<Rental>{
    return this.http.put<Rental>(`${this.urlEndPoint}/${rentas.id}`, rentas, {headers: this.httpHeaders}).pipe(
      catchError(e => {

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  delete(id: number): Observable<Rental>{
    return this.http.delete<Rental>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );

  }

}
