import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  //default
  option = '1';

  technology: Technology[] = [];
  name = '';
  description = '';
  imageLandscape = '';
  imagePortrait = '';

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    this.getTechnology(this.option);
  }

  getTechnology(id: any){
    this.dataService.getJSON().subscribe(data=> {
      this.technology = data.technology;
      this.name = this.technology[id-1]['name'];
      this.description = this.technology[id-1]['description'];
      this.imageLandscape = this.technology[id-1]['images']['landscape'];
      this.imagePortrait = this.technology[id-1]['images']['portrait'];
    });
  }


  changeContent(event: any){
    const id = event.target.id;
    this.option = id;
    this.getTechnology(this.option);
  }

}
