import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {

  name = '';
  role = '';
  bio = '';
  img = '';
  
  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    this.getCrew(0);
  }

  onItemChange(id: any){
    const crewID = id.target.value;
    this.getCrew(crewID);
  }

  getCrew(id: any){
     this.dataService.getJSON().subscribe(data=> {
      const crew = data.crew;
      this.name = crew[id]['name'];
      this.role = crew[id]['role'];
      this.bio = crew[id]['bio'];
      this.img = crew[id]['images']['png'];
    });
  }

}
