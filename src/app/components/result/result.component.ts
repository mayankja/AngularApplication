import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  login: string;
  type: string;
  avatar_url: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, AfterViewInit {
  @Input() searchResult;
  @Input() dataLength;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isDataLoaded: boolean = false;

  displayedColumns: string[] = ['avatar_url', 'login', 'type'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.searchResult);
    this.isDataLoaded = true;
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
