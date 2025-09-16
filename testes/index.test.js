const request = require("supertest");
const app = require("../index"); // importa o app do index.js

describe("Testes da aplicação Node.js", () => {
  test("Deve retornar 200 na rota raiz /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  test("Deve retornar mensagem correta na rota raiz /", async () => {
    const res = await request(app).get("/");
    expect(res.text).toContain("Servidor rodando com sucesso!");
  });

  test("Deve retornar 404 em rota inexistente", async () => {
    const res = await request(app).get("/rota-invalida");
    expect(res.statusCode).toBe(404);
  });

  test("Objeto deve conter chave nome", () => {
    const usuario = { nome: "André", idade: 38 };
    expect(usuario).toHaveProperty("nome");
  });

  test("Soma deve funcionar corretamente", () => {
    const soma = (a, b) => a + b;
    expect(soma(2, 3)).toBe(5);
  });
});
