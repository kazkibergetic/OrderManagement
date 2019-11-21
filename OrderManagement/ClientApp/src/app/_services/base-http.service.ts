import {Inject, Injector} from '@angular/core';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';


export class BaseHttpService {

  static withSpinnerParam: string = 'withSpinner';
  static skipJwtAuthParam: string = 'skipJwtAuth';
  static skipErrorAlertParam: string = 'skipErrorAlert';

  emptyParams = new HttpParams();
  withSpinnerParams = this.emptyParams.set(BaseHttpService.withSpinnerParam, 'true');
  protected http: HttpClient;
  protected baseUrl: string;

  constructor(injector: Injector, @Inject('BASE_URL') baseUrl: string) {
    this.http = injector.get(HttpClient);
    this.baseUrl = baseUrl;
  }

  static extractParam(param: string, request: HttpRequest<any>) {
    let paramBool = false;
    if (request.params.get(param)) {
      paramBool = true;
      request = request.clone({
        params: request.params.delete(param),
      });
    }
    return {paramBool, request};
  }

  getUrl(path: string): string {
    return `${this.baseUrl}${path}`;
  }

}
