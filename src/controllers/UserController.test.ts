import { Request } from "express";
import {UserController} from "./UserController"
import { makeMockResponse } from "../__mocks__/mockResponse";
import { User } from "../entities/User";

describe('User Controller', ()=>{
    const users = new UserController();
    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()
    const request = {
        body: {
          name: 'Algum nome',
          email: 'email@dio.ex'
        }
      } as Request
    it('should to list all users', ()=>{
        users.createUser(request, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({
            name: 'Algum nome',	
            email: 'email@dio.ex',
        })
    })
})