import { inject, TestBed } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HerbsService } from './herbs.service';


describe('HerbsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {
          provide: XHRBackend,
          useClass: MockBackend
        }, HerbsService]
    })
  });

  describe('get herbs', () => {

    it('should return correct Observable from service', () => {
      inject([HerbsService, XHRBackend], (herbsService, mockBackend) => {

        const mockRespone = {
          data: [
            { id: 1, name: 'hello' },
            { id: 2, name: 'world' }
          ]
        }

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockRespone)
          })));
        })

        herbsService.getHerbs().subscribe((herbs) => {
          expect(herbs.length).toEqual(2);
        })
      })
    });
  });
})
