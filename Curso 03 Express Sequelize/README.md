# Express e Sequelize

## Soft delete
  - Adicionar propriedade `paranoid: true` no modelo.
  - É necessário criar a coluna "deletedAt" nas tabelas. Para isso, criar o arquivo em migrações com o método `.addColumn`. Ou executar o comando `npx sequelize migration:create --name add-deleteAt-to-pessoas` Em seguida, executar as migrações com `npx squelize-cli db:migrate`.
  
## Escopo padrão (escopo de modelo)
Acessar apenas as pessoas ativas por padrão. Adicionar no modelo:
    ```js
    defaultScope: {
      where: {
        ativo: true
      }
    }
    ```
  ## Escopos

  Fluxo: modelo > Services > PessoasServices > PessoaController > PessoaRoutes

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

## Validação de String
(mínimo 3 caracteres, máximo de 30 caracteres)

No modelo pessoa:

```js
    nome: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 30],
          msg: 'O campo nome deve ter no mínimo 3 caracteres e no máximo 30 caracteres'
        }
      }
    },

```

## Validação de CPF (validação customizada)

- Adicionar validação no modelo pessoa:

```js
    cpf: {
      type: DataTypes.STRING,
      validate: {
        cpfIsValid: (cpf) => {
          if (!isCpfValido(cpf)) throw new Error("Número de CPF inválido");
        }
      }
    },
```

- Criar arquivo `validaCpfHelper.js` na pasta `utils` com a função de validação:

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

http://localhost:3000/cursos?data_inicial=2023-05-01&data_final=2023-09-01