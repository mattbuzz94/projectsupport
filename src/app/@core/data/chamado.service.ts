
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { Chamado } from './chamado';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { of } from 'rxjs/observable/of';

const API_URL = environment.apiUrl;

@Injectable()
export class ChamadoService {
    constructor(private httpClient: HttpClient) {

    }    // private chamados: Chamado[]; // Lista de usuários
    public get1Chamados(): Observable<Chamado[]> {
        return this.httpClient.get<Chamado[]>(API_URL + 'chamado/555699/')
            .pipe(
                tap(chamados => {
                    console.log('chamados fetched...');
                    console.log(chamados);
                }),
                catchError(this.handleError('getChamados', []))
            );
    }
    // API: GET /Chamados
    getChamados(): Observable<Chamado[]> {
        return this.httpClient.get<Chamado[]>(API_URL + 'chamado')
            .pipe(
                tap(chamados => {
                    console.log('chamados fetched...');
                    console.log(chamados);
                }),
                catchError(this.handleError('getChamados', []))
            );
    }

    public getChamadosBusca(textoBusca: string, projeto: string): Observable<Chamado[]> {
        const url = `${API_URL}busca/?textoBusca='${textoBusca}/?modulo='${projeto}`;
        return this.httpClient.get<Chamado[]>(url).pipe(
            tap(chamados => {
                console.log(`fetched chamado id=${textoBusca}`);
                console.log(chamados);
            }),
            catchError(this.handleError('getChamados', []))
        );
    }
    getChamado(id: number): Observable<Chamado> {
        const url = `${API_URL}/${id}`;
        return this.httpClient.get<Chamado>(url).pipe(
            tap(_ => console.log(`fetched chamado id=${id}`)),
            catchError(this.handleError<Chamado>(`getChamado id=${id}`))
        );
    }
    getRepos(textoBusca: string, modulo: string): Observable<Chamado[]> {
        // tslint:disable-next-line:prefer-const
        let params = new HttpParams()
            .set('textoBusca', textoBusca)
            .set('modulo', modulo);

        console.log(params.toString());

        // return this.httpClient.get<Chamado[]>(API_URL + 'users/' + userName + '/repos', { params });
        return this.httpClient.get<Chamado[]>(API_URL + 'chamado/busca/', { params });
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
