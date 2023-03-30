import { TestBed } from '@angular/core/testing';

import { MensagemApiService } from './mensagem-api.service';

describe('MensagemApiService', () => {
  let service: MensagemApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensagemApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
