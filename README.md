# Loopback-PostgreSQL generator
 
## Description

Loopback-PostgreSQL generator is a [yeoman] (https://github.com/yeoman/generator) package that allows you to scaffold a new REST API loopback project that are using:

* [LoopBack](https://github.com/strongloop/loopback) - Node.js REST API framework 
* [PostgreSQL](https://github.com/strongloop/loopback-connector-postgresql) - PostgreSQL loopback connector 
* [Winston](https://github.com/winstonjs/winston) - Logging module that configured to write in DB, logfile and console
* [.env module](https://github.com/rolodato/dotenv-safe) - Library for .env credentials management
* [DB migrations](https://github.com/db-migrate/node-db-migrate) - Database migration framework for Node.js, settings and commands are described below

Also current boilerplate uses [S3 component](https://github.com/strongloop/loopback-component-storage) and SMTP.

## Install

1. Install: ```npm install -g generator-loopback-postgresql```
2. Install yeoman: ```npm install -g yo``` if it isn't exist yet
3. Run: ```yo loopback-postgresql```

## Usage

After project generation you should edit your .env file and setup all correct credentials for your services.

### .env

```
BUCKET=default.bucket.name
BUCKET_KEY=bucket.key
BUCKET_KEY_ID=bucket.id

RDS_HOSTNAME=localhost
RDS_PORT=5432
RDS_DBNAME=dbname
RDS_USERNAME=postgres
RDS_PASSWORD=postgres

SMTP_HOST=smtp.host.name
SMTP_USERNAME=smtp.user.name
SMTP_PASSWORD=smtp.password

DEBUG=*
```

[Loopback Debug values](https://loopback.io/doc/en/lb2/Setting-debug-strings.html#debug-strings-reference)

### Migrations
You have an ability to work with migrations. 
Before start you must edit settings for this module. `./migrations/database.json`
A new application has a few scripts for db migrations:

```
npm run migrate up
```
The up command executes the migrations of your currently configured migrations directory.

```
npm run migrate down
```
The down command executes the migrations of your currently configured migrations directory.

```
npm run migrate reset
```
The reset command is a shortcut to execute all down migrations and literally reset all migrations which where currently done.

```
npm run migrate create
```
The create command creates templates for you, there are several options for this.

**Directory of migrations by default is located at: `./migrations/`**

Further information about db migrations you can find on [this page](https://db-migrate.readthedocs.io/en/latest/Getting%20Started/the%20commands/). 
