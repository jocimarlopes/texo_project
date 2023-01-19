import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';
@Component({
  selector: 'dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.scss'],
})
export class DashboardCardsComponent implements OnInit {

  cards_values: any = {}
  yearsWithMultipleWinners: any = []
  studiosWithWinners: any = []
  intervalProducers: any = {}
  winnersByYear: any = []
  selectedYear: number = 2018
  searchClicked: boolean = false

  constructor(
    private api: ApiService,
    private helper: HelperService
  ) { }

  ngOnInit() {
    this.getYearsWithWinners()
    this.getStudiosWithWinners()
    this.getIntervalProducers()
  }

  private getYearsWithWinners() {
    this.api.get('?projection=years-with-multiple-winners').subscribe((data: any) => this.yearsWithMultipleWinners = data.years)
  }

  private getStudiosWithWinners() {
    this.api.get('?projection=studios-with-win-count').subscribe(data => this.studiosWithWinners = data.studios.filter((item: any) => data.studios.indexOf(item) < 3 ? item : undefined))
  }

  private getIntervalProducers() {
    this.api.get('?projection=max-min-win-interval-for-producers').subscribe(data => this.intervalProducers = data)
  }

  public searchByYear() {
    this.searchClicked = true
    this.api.get(`?winner=true&year=${this.selectedYear}`).subscribe(data => {
      if(data.length) return this.winnersByYear = data
      this.helper.message("Sorry, this year don't have movie", 3000, 'warning')
      this.searchClicked = false
    })
  }

  public selectYearChanging(ev: any) {
    this.selectedYear = ev.detail.value
    console.log(this.selectedYear);
    
  }

}
