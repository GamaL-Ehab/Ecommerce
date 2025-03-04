import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../../Environments/baseUrl';
import { Observable } from 'rxjs';
import { BrandsRes } from '../../Interfaces/res/brands-res';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllBrands():Observable<BrandsRes>{
    return this._HttpClient.get<BrandsRes>(`${baseUrl}/api/v1/brands`);
  }


}
