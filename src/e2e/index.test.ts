import request from "supertest";
import { createApp } from "../createApp";
import { App } from "supertest/types";

describe("/api/users", () => {
  let app: App;

  beforeAll(() => {
    app = createApp();
  });

  it("should return an empty array when getting /api/users route", async () => {
    const response = await request(app).get("/api/users");
    expect(response.body).toStrictEqual([]);
  });
});
