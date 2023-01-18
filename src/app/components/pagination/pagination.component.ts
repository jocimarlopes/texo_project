import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input() pagination: any = {}
  @Output() selectedPageOutput: any = new EventEmitter<number>();
  selectedPage: number = 0;
  pages: any = []

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.refreshPageParams()
  }

  private refreshPageParams() {
    if (this.pagination?.content)
      this.pages = Array.from(Array(this.pagination?.totalPages ? this.pagination.totalPages : 5).keys())
  }

  public goPage(page: any) {
    this.setPage(page)
  }

  private setPage(page: number | string) {
    if (typeof (page) === 'number')
      this.selectedPage = page
    else
      this.selectedPage = this.specialButtons(page)
    this.selectedPageOutput.emit(this.selectedPage);
  }

  specialButtons(page: number | string) {
    const jumpToPage: any = {
      'first': 0,
      'last': this.pagination.totalPages - 1,
      'before': this.selectedPage - 1,
      'after': this.selectedPage + 1
    }
    return jumpToPage[page]
  }

}
