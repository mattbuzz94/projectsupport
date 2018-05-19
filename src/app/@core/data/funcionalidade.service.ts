import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Funcionalidade } from './funcionalidade';

const API_URL = environment.apiUrl;

@Injectable()
export class FuncionalidadeService {
  funcionalidades: Funcionalidade[] = [];
  constructor(private httpClient: HttpClient) {

  }
  public getFuncionalidades(codSistema: string): Observable<Funcionalidade[]> {
    const params = new HttpParams()
      .set('codSistema', codSistema);
    // tslint:disable-next-line:no-console
    console.log(params.toString());
    return this.httpClient.get<Funcionalidade[]>(API_URL + 'funcionalidade/busca/', { params }).pipe(
      tap(funcionalidades => {
        // tslint:disable-next-line:no-console
        console.log(`fetched texto=${codSistema}`);
        // tslint:disable-next-line:no-console
        console.log(funcionalidades);
        this.setFuncionalidadeData(funcionalidades);
        // this.router.navigateByUrl('/pages/lista-chamados');
      }),
      catchError(this.handleError('getFuncionalidades', [])),
    );
  }
  setFuncionalidadeData(data: Funcionalidade[]) {
    this.funcionalidades = data;
  }
  getFuncionalidadeData() {
    return this.funcionalidades;
  }
  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
