
import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../../shared/service/base-resource.service';
import { Exemplo } from '../model/exemplo';

@Injectable({
  providedIn: 'root'
})
export class ExemploService extends BaseResourceService<Exemplo> {

  constructor(protected override injector: Injector) {
    super("cores", injector, Exemplo.fromJson);
  }

}