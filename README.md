# Discord-Bot
Use the below queries to first create the db structure

Create schema `test_schema`;

CREATE TABLE `test_schema`.`bot_query` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `query` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `query_UNIQUE` (`query` ASC));


Use the command 'yarn start' in root directory to initiate the bot.
