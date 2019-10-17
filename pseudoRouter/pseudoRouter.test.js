const Router = require("./pseudoRouter");

describe("router", () => {
  test("router one bind", () => {
    const router = new Router();
    const callback = function() {
      return "hello world";
    };
    router.bind("/hello", "GET", callback);
    expect(router.runRequest("/hello", "GET")).toBe("hello world");
  });

  test("router rebind callback", () => {
    const router = new Router();
    const callback = function() {
      return "hello world";
    };
    const callback2 = function() {
      return "hello world 2";
    };
    router.bind("/hello", "GET", callback);
    router.bind("/hello", "GET", callback2);
    expect(router.runRequest("/hello", "GET")).toBe("hello world 2");
  });

  test("router 404", () => {
    const router = new Router();
    const callback = function() {
      return "hello world";
    };
    router.bind("/hello", "POST", callback);
    expect(router.runRequest("/hello", "GET")).toBe("Error 404: Not Found");
  });
});
