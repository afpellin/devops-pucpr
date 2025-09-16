const request = require('supertest');
const app = require('../index');

describe("Testes da aplicação Express", () => {
  
  test("Servidor responde com status 200 na rota /", async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  test("Resposta da rota / contém a mensagem correta", async () => {
    const res = await request(app).get('/');
    expect(res.text).toContain("Servidor rodando com sucesso!");
  });

  test("Array de tecnologias contém 'docker'", () => {
    const tecnologias = ["node", "express", "docker", "jest"];
    expect(tecnologias).toContain("docker");
  });

  test("Objeto usuário deve conter nome e idade", () => {
    const user = { nome: "André", idade: 38 };
    expect(user).toHaveProperty("nome");
    expect(user).toHaveProperty("idade");
  });

  test("2 + 3 deve ser igual a 5", () => {
    expect(2 + 3).toBe(5);
  });

});
