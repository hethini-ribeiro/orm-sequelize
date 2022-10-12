# orm-sequelize

## Iniciar nodemon: 
- npm run start

## Sequelize
- npx sequelize-cli db:create
- npx sequelize-cli db:migrate
- npx sequelize-cli db:migrate:undo
- npx sequelize-cli migration:generate --name [name_of_your_migration]

## Seeders
- npx sequelize-cli seed:generate --name [demo-pessoa]
- npx sequelize-cli db:seed:all
- npx sequelize db:seed:undo
- npx sequelize-cli db:seed:undo --seed nome-do-arquivo
- npx sequelize-cli db:seed:undo:all

## Diagrama do banco
![diagrama](https://user-images.githubusercontent.com/72409116/190863149-a4cf507e-59a5-4af4-9003-8cc29a5ee52e.png)
