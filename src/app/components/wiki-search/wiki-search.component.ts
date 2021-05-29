import { Component, OnInit } from '@angular/core';
import {WikiService} from '../../services/wiki.service';

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css']
})
export class WikiSearchComponent implements OnInit {
searchedPhrase: string;
results: [];

  constructor(private wikiService: WikiService) { }

  ngOnInit(): void {
  }

  getBestResults(searchedPhrase: string): void {
    this.wikiService.getTenBestSearchedWikiResults(searchedPhrase).subscribe(data => {
      console.log(data, 'data');
      this.results = data.query.search;
    });
  }
}
