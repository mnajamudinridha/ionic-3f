import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiTutorial {
  Hasil: any[];
  Status: any[];
}

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getTutorial():Observable<ApiTutorial>{
    return this.http.get<ApiTutorial>('http://localhost/kelas3f.com/index.php');
  }
}