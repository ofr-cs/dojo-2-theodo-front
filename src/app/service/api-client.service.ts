import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ResponseWord} from "../model/responseWord.model";
import {GuessWord} from "../model/guessWord.model";

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private httpClient = inject(HttpClient);

  public getWordDistance(guess: GuessWord): Observable<ResponseWord>{
    return this.httpClient.get<{ result: number }>(`https://dojo-2-theodo.ofr-cs.deno.net/${guess.value}`).pipe(
      map(response => ({ value: Math.round(response.result * 100) }))
    );
  }
}