import { getUsers } from "../../handlers/users.handlers";
import { mockRequest, mockResponse } from "../../mocks";

describe("getUsers", () => {
  it("should return an array of all users", () => {
    getUsers(mockRequest, mockResponse);
    expect(mockResponse.send).toHaveBeenCalledWith([]);
  });
});
