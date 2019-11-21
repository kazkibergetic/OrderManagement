import {Inject, Injector} from '@angular/core';
import {tap} from 'rxjs/operators';
import {BaseHttpService} from './base-http.service';
import {CrudlServiceParams} from '../models/crudl-service-params';

export abstract class BaseCrudlHttpService extends BaseHttpService {

  abstract serviceParams: CrudlServiceParams;
  constructor(injector: Injector, @Inject('BASE_URL') baseUrl: string) {
    super(injector, baseUrl);
  }

  get(id: string) {
    return this.http.get<any>(this.getUrl(this.serviceParams.getUrl), {params: this.withSpinnerParams.set(this.serviceParams.getParam, id)});
  }

  all(sort: string, order: string, page: number) {
    return this.http.post<any>(this.getUrl(this.serviceParams.allUrl), {sort: sort, order: order, page: page});
  }




}
