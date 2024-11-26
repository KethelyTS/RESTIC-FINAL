@ -0,0 +1,21 @@
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = 'http://localhost:3000/videos';

  constructor(private http: HttpClient) {}

  getVideos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateVideo(video: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${video.id}`, video);
  }
}
