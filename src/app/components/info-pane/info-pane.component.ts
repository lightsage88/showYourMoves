import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Fighter } from '../../models/Fighter'
import { SearchbarService } from '../../services/searchbar.service'

interface DataItem {
  name: string;
  // age: number;
  // address: string;
}

interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder;
  sortFn?: NzTableSortFn;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn;
  filterMultiple?: boolean;
  sortDirections?: NzTableSortOrder[];
}

@Component({
  selector: 'app-info-pane',
  templateUrl: './info-pane.component.html',
  styleUrls: ['./info-pane.component.scss']
})
export class InfoPaneComponent implements OnInit {
  @Input() fighter: Fighter
  @Output() fighterNameToSeek = new EventEmitter<Event>()
  
  
  relatedCharactersData:DataItem[] = []


  listOfColumns:ColumnItem[] = [
    {
      name: 'Related Characters',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      filterMultiple: true,
      filterFn: (list: string[], item: DataItem) => list.some(name => item.name.indexOf(name) !== -1)
    },
  ]
  constructor(private searchbar: SearchbarService) { }

  ngOnInit(): void {
    this.parseSeriesCharacters()
  }

  parseSeriesCharacters():void {
    this.fighter.franchise.fighters.forEach(el => {
      if(el.id !== this.fighter.id) {
        this.relatedCharactersData.push({
          name: el.name
        })
      }
    })
  }

  seekName(e: Event):void {
    const value = (e.target as HTMLInputElement).textContent;
    this.fighterNameToSeek.emit(e)
    this.searchbar.handleClickValue(e)
  }
}