import { TestBed } from '@angular/core/testing';

import { ContratosTrabalhosService } from './contratos-trabalhos.service';

describe('ContratosTrabalhosService', () => {
  let service: ContratosTrabalhosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratosTrabalhosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
