import {ChangeDetectorRef, Component, AfterViewInit, OnInit, ViewChild} from '@angular/core';
import { MachineryService } from '../_services/machinery.service';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BehaviorSubject, Observable} from "rxjs";
import {merge, from} from 'rxjs';
import { map } from 'rxjs/operators';
import {DataSource} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'machinery',
  templateUrl: './list.component.html'
})


export class MachineryComponent implements AfterViewInit{

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private machineryService: MachineryService) {

  }

  displayedColumns: string[] = ['id', 'order_num'];
  dataSource = new MatTableDataSource();
  processes;

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);



     this.machineryService.all(this.sort.active, this.sort.direction, this.paginator.pageIndex).subscribe(
       (data)=>
       {
         this.dataSource = new MatTableDataSource<Machinery>(data);
         return
       },
         (error)=>
         {

         }

     );
    //this.dataSource = this.machineryService.all("");


    /*this.machineryService.all(this.sort.active, this.sort.direction, this.paginator.pageIndex).subscribe(result => {
      this.processes = result;
        this.dataSource = new TableDataSource(this.processes);
        Observable.fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) {
            return;
          }
          this.dataSource.filter = this.filter.nativeElement.value;
        });
        return;
      });*/


   // this.dataSource.sort = this.sort;
   // this.dataSource.paginator = this.paginator;

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if(this.dataSource.paginator)
    {
      this.dataSource.paginator.firstPage();
    }
  }


}
export interface Machinery {
  id: number;
  order_num: string;
}

export class TableDataSource extends DataSource<Machinery>{
  _filterChange = new BehaviorSubject('');
  get filter(): string {
    return this._filterChange.value;
  }
  set filter(filter: string) {
    this._filterChange.next(filter);
  }
  filteredData: any =[];

  constructor(private processes:Machinery[]){
    super();
  }
  connect(): Observable<Machinery[]>{
    const displayDataChanges = [
      this.processes,
      this._filterChange,
    ];
    return merge(...displayDataChanges).pipe(map(() => {
      this.filteredData = this.processes.slice().filter((item: Machinery) => {
        const searchStr = (item.order_num).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;

      });
      return this.filteredData;
    })
    )
  }
  disconnect(){}
}
