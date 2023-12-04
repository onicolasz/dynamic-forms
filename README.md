# Formulários dinâmicos em Nuxt por Nícolas Barros.

## Informações

Este projeto se trata de um teste prático, onde foi necessário implementar uma página de formulário, por este motivo a rota raiz do projeto localhost:3000/ não tem conteúdo, recomendo ir direto para a página: http://localhost:3000/form/1.

## Como iniciar

```bash
# Instale as dependências do projeto
$ npm install

# Inicie o server em localhost:3000
$ npm run dev

# Build para produção e iniciar servidor
$ npm run build
$ npm run start

# Gerar projeto estático
$ npm run generate
```

Para maiores detalhes sobre o funcionamento do nuxt, acesse [a documentação](https://nuxtjs.org).

## Teste E2E

Este projeto contém testes automatizados com cypress, para realiza-los, primeiro instale as dependências do projeto, e execute o comando npx cypress open

```bash
# Iniciar testes automatizados do cypress
$ npx cypress open
```

## Estrutura do projeto

### `assets`

O diretório assets contém os seus assets não compilados, tais como ficheiros Stylus ou Sass, imagens ou tipos de letra.

Mais informações sobre a utilização deste diretório em [a documentação](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

O diretório de componentes contém os seus componentes Vue.js. Os componentes constituem as diferentes partes da página e podem ser reutilizados e importados para as suas páginas e até outros componentes.

Mais informações sobre a utilização deste diretório em [a documentação](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `pages`

Este diretório contém as views e rotas da sua aplicação. O Nuxt irá ler todos os arquivos `*.vue` dentro deste diretório e configurar o Vue Router automaticamente.

Mais informações sobre o uso deste diretório na [documentação](https://nuxtjs.org/docs/2.x/get-started/routing).

### `static`

Este diretório contém seus arquivos estáticos. Cada arquivo dentro deste diretório é mapeado para `/`.

Exemplo: `/static/robots.txt` é mapeado como `/robots.txt`.

Mais informações sobre o uso deste diretório em [a documentação](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

Este diretório contém seus arquivos de loja Vuex. Criar um ficheiro neste diretório ativa automaticamente o Vuex.

Mais informações sobre a utilização deste diretório em [a documentação](https://nuxtjs.org/docs/2.x/directory-structure/store).
