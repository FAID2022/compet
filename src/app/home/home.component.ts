import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  backendData: string = '';
  private backendUrl = 'http://localhost:3300';  // Change this based on your Docker setup

  constructor(private http: HttpClient) {}

  getBackendData(): Observable<any> {
    return this.http.get<any>('http://localhost:3400');
  }

  ngOnInit(): void {
    this.getBackendData().subscribe(
      data => {
        this.backendData = data.name;  // Assuming the backend returns { name: "messi10" }
      },
      error => {
        console.error('Error fetching data:', error);
        this.backendData = 'Failed to load data';
      }
    );
  }
  public solutionVisible:boolean=false
  showSolution(): void {
    this.solutionVisible = true;
  }
}
