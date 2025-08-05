import {Component, OnInit} from '@angular/core';
import {ProgrammeService} from "../../services/programme.service";
import {Programme} from "../../models/Programme";

@Component({
  selector: 'app-programme-list',
  standalone: true,
  imports: [],
  templateUrl: './programme-list.component.html',
  styleUrl: './programme-list.component.css'
})
export class ProgrammeListComponent implements OnInit{

  private programsList?: Programme[];
  constructor(private programService: ProgrammeService) {
  }
  ngOnInit(): void {
    this.programService.getAllPrograms().subscribe(data => {
      this.programsList = data;
    });
  }


}
