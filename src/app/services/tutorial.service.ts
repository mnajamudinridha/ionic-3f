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

  getTutorialDetail(id: string | null){
    return this.http.get<ApiTutorial>(`http://localhost/kelas3f.com/index.php?id=${id}`);
  }

  deleteTutorial(id:string){
    return this.http.post<{id:string}>(`http://localhost/kelas3f.com/index.php?aksi=delete`, id);
  }

  tambahTutorial(data:{title:string, description:string}):Observable<{title:string, description:string}>{
    console.log(data);
    return this.http.post<{title:string,description:string}>(`http://localhost/kelas3f.com/index.php?aksi=tambah`, data);
  }
}
