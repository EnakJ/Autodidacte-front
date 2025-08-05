import {Component, OnInit} from '@angular/core';
import {ParcoursService} from "../../services/parcours.service";
import {Parcours} from "../../models/Parcours";


@Component({
  selector: 'app-parcours-list',
  standalone: true,
  imports: [],
  templateUrl: './parcours-list.component.html',
  styleUrl: './parcours-list.component.css'
})
export class ParcoursListComponent implements OnInit{
  public parcoursList?: Parcours[];
  constructor(private parcoursService: ParcoursService) {
  }
  ngOnInit(): void {
    this.parcoursService.getAllParcours().subscribe(data => {
      this.parcoursList = data;
    });
  }

}
