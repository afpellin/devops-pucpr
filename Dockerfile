# Use a imagem oficial do Node.js como base
FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de dependências e instalar
COPY package*.json ./
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta que sua aplicação usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
