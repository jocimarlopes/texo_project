import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {

  pageData: any = {}
  filterWinner: boolean = true
  selectedYear: number = 1980

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getMovies()
  }

  private getMovies(page: number = 0) {
    this.api.get(`?page=${page}&size=15`).subscribe(data => this.pageData = data)
  }

  public filter(ev: any, filterByWinner: number) {
    console.log(ev, 'ev');
    console.log(this.selectedYear, 'selectedYear');
    
    
    if(!ev.detail.value && !this.selectedYear) return this.getMovies()
    if(ev.detail.value.length !== 4 && typeof(ev.detail.value) === 'string') return
    this.doRequestToApi(filterByWinner, ev)
  }

  private doRequestToApi(param: number, ev: any) {
    const params: any = {
      0: `?page=0&size=15&winner=${this.filterWinner}&year=${ev.detail.value}`,
      1: `?page=0&size=15&winner=${ev.detail.value}&year=${this.selectedYear}`
    }
    !param ? this.selectedYear = ev.detail.value : this.filterWinner = ev.detail.value
    this.api.get(params[param]).subscribe(data => this.pageData = data)

  }

  public selectPage(ev: any) {
    this.pageData = {}
    this.getMovies(ev)
  }

}
