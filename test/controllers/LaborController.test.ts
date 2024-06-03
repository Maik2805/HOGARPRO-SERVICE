import { Request, Response } from 'express';
import { all, helloWorld3 } from '../../src/controller/LaborController';
import * as laborService from '../../src/service/LaborService';
import { Labor } from '../../src/entity/Labor';

jest.mock('../../src/service/LaborService');

describe('LaborController', () => {
  describe('all', () => {
    it('should send all labores', async () => {
      const mockLabores: Labor[] = [
        {
          "id": 2,
          "tipo": "Plomero",
          "descripcion": "Plomero.",
          "servicios": [],
          "laborTrabajador": []
        },
        {
          "id": 1,
          "tipo": "Paseador de Perros",
          "descripcion": "Paseador de Perros.",
          "servicios": [],
          "laborTrabajador": []
        }
      ];

      const mockRequest = {} as Request;
      const mockResponse = {
        send: jest.fn(),
      } as unknown as Response;

      (laborService.all as jest.Mock).mockResolvedValue(mockLabores);

      await all(mockRequest, mockResponse);

      expect(mockResponse.send).toHaveBeenCalledWith(mockLabores);
    });
  });
  describe('helloWorld3', () => {
    it('Return Hello World3', () => {
      expect(helloWorld3()).toBe("Hello World3");
    });
  });
});