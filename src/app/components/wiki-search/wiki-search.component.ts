import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {WikiService} from '../../services/wiki.service';
import {Item} from '../../interfaces/item';
import {WikiAPI} from '../../interfaces/wiki-api';

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class WikiSearchComponent implements OnInit {
  searchedPhrase = '';
  replaceWith = '';
  showReplaced = false;
  results: Item[];
  matchedPhraseElements: HTMLElement[];
  matchedPhraseElement: HTMLElement;
  replacedPhraseElements: HTMLElement[];

  constructor(private wikiService: WikiService, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  /**
   * Returns ten wiki results fetched from WikiApi
   * @string searchedPhrase
   */
  onGetBestResults(searchedPhrase: string): void {
    this.wikiService.getTenBestWikiResults(searchedPhrase).subscribe((data: WikiAPI) => {
      this.results = data.query.search;
    });
  }

  /**
   * Replaces single first matched string with new value;
   * @string replaceWith
   */
  onReplaceSingleMatch(replaceWith: string): void {
    if (this.results.length > 0) {
      this.matchedPhraseElement = this.elementRef.nativeElement.querySelector('.searchmatch');
      if (this.matchedPhraseElement) {
        this.matchedPhraseElement.className = 'replaced-match';
        this.matchedPhraseElement.innerText = replaceWith;
      }

      this.replacedPhraseElements = this.elementRef.nativeElement.querySelectorAll('.replaced-match');
      if (this.showReplaced) {
        this.onHighlightReplaced(this.showReplaced);
      }
    }
  }

  /**
   * Replaces all matched results with new values;
   * @string replaceWith
   */
  onReplaceAllMatches(replaceWith: string): void {
    if (this.results.length > 0) {
      this.matchedPhraseElements = this.elementRef.nativeElement.querySelectorAll('.searchmatch');
      this.matchedPhraseElements.forEach(value => {
        value.className = 'replaced-match';
        value.innerText = replaceWith;
      });
      this.replacedPhraseElements = this.elementRef.nativeElement.querySelectorAll('.replaced-match');
      if (this.showReplaced) {
        this.onHighlightReplaced(this.showReplaced);
      }
    }
  }

  /**
   * Clears searched results, searchedPhrase and replaceWith values;
   */
  onClearSearchedResults(): void {
    this.searchedPhrase = '';
    this.replaceWith = '';
    this.results = [];
    this.replacedPhraseElements = null;
  }

  /**
   * Applies setting to highlight/Not highlight replaced values;
   * @string showReplaced
   */
  onHighlightReplaced(showReplaced: boolean): void {
    if (this.replacedPhraseElements) {
      this.replacedPhraseElements.forEach(value => {
        if (showReplaced) {
          value.className = 'replaced-match highlight-replaced';
        } else {
          value.className = 'replaced-match';
        }
      });
    }
  }
}
