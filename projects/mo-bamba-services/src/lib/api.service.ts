import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Send get request w/ given options
   * @param endpoint 
   * @param options 
   */
  public Get(endpoint: string, options: any = {}) {
    return this.http.get(endpoint, options);
  }

  /**
   * Send post request w/ given options
   * @param endpoint 
   * @param payload 
   * @param options 
   */
  public Post(endpoint: string, payload: any, options: any = {}) {
    return this.http.post(endpoint, payload, options);
  }

  /**
   * Send put request w/ given options
   * @param endpoint 
   * @param payload 
   * @param options 
   */
  public Put(endpoint: string, payload: any, options: any = {}) {
    return this.http.put(endpoint, payload, options);
  }

  /**
   * Send delete request w/ given options
   * @param endpoint 
   * @param options 
   */
  public Delete(endpoint: string, options: any = {}) {
    return this.http.delete(endpoint, options);
  }

}
