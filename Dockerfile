# Use uma imagem base oficial do Node.js.
# A versão Alpine é leve, o que é ótimo para desenvolvimento e produção.
FROM node:20-alpine

# Define o diretório de trabalho dentro do contêiner.
WORKDIR /app

# Copia os arquivos de definição de dependências primeiro.
# Isso aproveita o cache de camadas do Docker, para que as dependências
# não sejam reinstaladas a cada mudança no código.
COPY package*.json ./

# Instala as dependências do projeto.
RUN npm install

# Copia o restante do código da aplicação para o diretório de trabalho.
COPY . .

# Expõe a porta em que a aplicação Next.js roda.
EXPOSE 3000

# O comando para iniciar a aplicação em modo de desenvolvimento.
# O Docker Compose irá sobrescrever este comando se necessário.
CMD ["npm", "run", "dev"]
