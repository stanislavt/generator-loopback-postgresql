[Yeoman](http://yeoman.io/) generator that scaffolds out an application which based on Loopback framework with:
- [PostgreSQL connector](https://www.npmjs.com/package/loopback-connector-postgresql)
- [DB migrations](https://www.npmjs.com/package/db-migrate)
- [Winston](https://www.npmjs.com/package/winston) as a logger
- [.env](https://www.npmjs.com/package/dotenv-safe)

## Getting Started
1. Install: `npm install -g generator-loopback-postgresql`
2. Install yeoman: `npm install -g yo` if it isn't exist yet
3. Run: `yo loopback-postgresql`

## Migrations
A new application has a few scripts for db migrations:

```
npm run-script migrate up
```
The up command executes the migrations of your currently configured migrations directory.

```
npm run-script migrate down
```
The down command executes the migrations of your currently configured migrations directory.

```
npm run-script migrate reset
```
The reset command is a shortcut to execute all down migrations and literally reset all migrations which where currently done.

```
npm run-script migrate create
```
The create command creates templates for you, there are several options for this.

*Migrations directory by default is located on `/migrations/`

Further information about db migrations you can find on [this](https://db-migrate.readthedocs.io/en/latest/Getting%20Started/the%20commands/) page.

## Looger
A new application uses Winston as a logs system. 
All log's messages you can see in the terminal where you launch node.js server. 
Also all these messages are duplicated to PostgreSQL. 