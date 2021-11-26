import { Component, OnInit } from '@angular/core';
import { Destinations } from 'src/app/models/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  destinations: Destinations[] = [];

  selected = 'Moon';

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    this.getDestination();
  }

  getDestination(){
    this.dataService.getJSON().subscribe(data=> {
      this.destinations = data.destinations;
    });
  }

  get filterByName() {
    return this.destinations.filter( item => item.name === this.selected);
  }

  changeContent(event: any){
    const option = event.target.id;
    this.selected = option;
  }

}
