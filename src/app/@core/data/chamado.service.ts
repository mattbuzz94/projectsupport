
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Chamado } from './chamado';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';

const API_URL = environment.apiUrl;

@Injectable()
export class ChamadoService {
    chamados: Chamado[] = [];
    constructor(private httpClient: HttpClient, private router: Router) {

    }
    // API: GET /Chamados
    getChamados(): Observable<Chamado[]> {
        return this.httpClient.get<Chamado[]>(API_URL + 'chamado')
            .pipe(
            tap(chamados => {
                // tslint:disable-next-line:no-console
                console.log('chamados fetched...');
                // tslint:disable-next-line:no-console
                console.log(chamados);
            }),
            catchError(this.handleError('getChamados', [])),
        );
    }

    public getChamadosBusca(textoBusca: string, modulo: string): Observable<Chamado[]> {
        const params = new HttpParams()
            .set('textoBusca', textoBusca)
            .set('modulo', modulo);
        // tslint:disable-next-line:no-console
        console.log(params.toString());
        return this.httpClient.get<Chamado[]>(API_URL + 'chamado/busca/', { params }).pipe(
            tap(chamados => {
                // tslint:disable-next-line:no-console
                console.log(`fetched texto=${textoBusca}`);
                // tslint:disable-next-line:no-console
                console.log(chamados);
                this.setChamadoData(chamados);
                this.router.navigateByUrl('/pages/lista-chamados');
            }),
            catchError(this.handleError('getChamados', [])),
        );
    }
    /*public getChamadosBusca(textoBusca: string, modulo: string): Observable<Chamado[]> {
        const params = new HttpParams()
            .set('textoBusca', textoBusca)
            .set('modulo', modulo);
        // tslint:disable-next-line:no-console
        console.log(params.toString());
        return this.httpClient.get<Chamado[]>(API_URL + 'chamado/busca/', { params })
    }*/
    getChamado(id: number): Observable<Chamado> {
        const url = `${API_URL}/${id}`;
        return this.httpClient.get<Chamado>(url).pipe(
            // tslint:disable-next-line:no-console
            tap(_ => console.log(`fetched chamado id=${id}`)),
            catchError(this.handleError<Chamado>(`getChamado id=${id}`)),
        );
    }
    setChamadoData(data: Chamado[]) {
        this.chamados = data;
    }
    getChamadoData() {
        return this.chamados;
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
