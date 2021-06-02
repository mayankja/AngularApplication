import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchService } from '../../services/search.service';

interface Result {
  incomplete_results: boolean;
  items: [];
  total_count: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  getSearchString: string;
  searchResult;
  getItemData: [];

  constructor(
    private searchService: SearchService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  searchString = (getVal) => {
    this.searchService.getSearchResult(getVal)
    .subscribe( res => {
      if (res) {
        this.openSnackBar("Request Successfull", "Success");
        this.searchResult = res;
        this.getItemData = this.searchResult.items;
      }
    }, err => {
      this.openSnackBar("Something Went Wrong", "Error");
      console.log('we got the error');
    });
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

}
