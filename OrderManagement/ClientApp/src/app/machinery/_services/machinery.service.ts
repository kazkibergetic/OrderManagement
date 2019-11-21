import {Inject, Injectable, Injector} from '@angular/core';
import {BaseCrudlHttpService} from "../../_services/base-crudl-http.service";

@Injectable({ providedIn: 'root' })
export class MachineryService extends BaseCrudlHttpService {
  constructor(injector: Injector, @Inject('BASE_URL') baseUrl: string) { super(injector, baseUrl); }
  serviceParams = {
    getParam: 'id',
    getUrl: '',
    allUrl: 'machinery/all',
    deleteUrl: '',
    updateUrl: '',
    addUrl: '',
    deleteMessage: 'All machines were deleted successfully',
    updateMessage: 'Machine was updated successfully',
    addMessage: 'Machine was created successfully'
  };




}
