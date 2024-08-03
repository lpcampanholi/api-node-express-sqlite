# Express e Sequelize

## Seeds
  - Comando para criar seeds: ``
  - Comando para rodar seeds: ``

## Migrações
  - Comando para criar migrações: ``
  - Comando para rodar migrações: ``

## Soft delete
  - através de `paranoid: true` no modelo. É necessário criar a coluna "deletedAt" nas tabelas.
  
  
  ## Escopo padrão
  Acessar apenas as pessoas ativas por padrão. Adicionar no modelo:
    ```js
    defaultScope: {
      where: {
        ativo: true
      }
    }
    ```
  ## Escopos

  No modelo adicionar a propriedade:

  ```js
      scopes: {
      todosOsRegistros: {
        where: {}
      }
    }
  ```

 Adicionar o método em `Services.js`:

  ```js
   async pegaRegistrosPorEscopo(escopo) {
    return dataSource[this.model].scope(escopo).findAll();
  };
  ```

  Adicionar o método em `PessoaServices.js`:

  ```js
    async pegaPessoasEscopoTodos() {
    const listaPessoas = await super.pegaRegistrosPorEscopo("todosOsRegistros");
    return listaPessoas;
  }
  ```

  Adicionar o método em `PessoaController.js`:

  ```js
  async pegaTodasAsPessoas(req, res) {
    try {
      const listaTodasAsPessoas = await pessoaServices.pegaPessoasEscopoTodos();
      return res.status(200).json(listaTodasAsPessoas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message});
    };
  };
  ```

E finalmente adicionar nas rotas:

```js
router.get("/pessoas/todos", (req, res) => pessoaController.pegaTodasAsPessoas(req, res));
```
## Validação do e-mail

No modelo pessoa:

```js
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Formato do email inválido'
        }
      }
    },
```

## Validação de email:

No modelo pessoa:

```js
    nome: {
      type: DataTypes.STRING,
      validate: {
        leg: {
          args: [3, 30],
          msg: 'O campo nome deve ter no mínimo 3 caracteres'
        }
      }
    },

```

## Validação de CPF

Criar arquivo `validaCpfHelper.js` na pasta `utils` com a função de validação:

```js
module.exports = (cpf) => {
  if (cpf.length !== 11) return false;
  return true;
};
```

e então chamá-la no módulo pessoa:

```js
const isCpfValido = require("../../utils/validaCpfHelper.js");

    cpf: {
      type: DataTypes.STRING,
      validate: {
        cpfIsValid: (cpf) => {
          if (!isCpfValido(cpf)) throw new Error("Número de CPF inválido");
        }
      }
    },
```