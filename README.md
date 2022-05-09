# Madhulika Odoo Coding Assesment
## Backend Questions
Quetions 1-4 live here. You can run the tests if you have node installed.

run the following commands
```bash
npm install;
npm run test;
```

### Question 5: Regex

#([a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*(?i)(odoo|oxp|openerp)[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*)
## Frontend Questions

For questions 6-9 please open the html files and you should be able to interact with the pages

## DB Questions
Describe answers here for DB Questions

10 A - SQL statements to create tables for recipes, steps, and ingredients.
```sql

CREATE TABLE `Recipe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191),
    PRIMARY KEY (`id`)
);


CREATE TABLE `Step` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `time` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `recipeId` INTEGER NULL,

    PRIMARY KEY (`id`)
);


CREATE TABLE `StepIngredient` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `stepId` INTEGER NULL,
    `ingredientId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);


CREATE TABLE `Ingredient` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `amout` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
);


ALTER TABLE `Step` ADD CONSTRAINT `Step_recipeId_fkey` FOREIGN KEY (`recipeId`) REFERENCES `Recipe`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;


ALTER TABLE `StepIngredient` ADD CONSTRAINT `StepIngredient_stepId_fkey` FOREIGN KEY (`stepId`) REFERENCES `Step`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;


ALTER TABLE `StepIngredient` ADD CONSTRAINT `StepIngredient_ingredientId_fkey` FOREIGN KEY (`ingredientId`) REFERENCES `Ingredient`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

```
10 B SQL query to list all recipes that take longer than 1 hr, sorted from longest to shortest.

```sql

CREATE OR REPLACE VIEW recipe_time as
    select sum(S.time) as recipe_time, S.recipeId
    from Step S
    group by S.recipeId;
SELECT * FROM Recipe R INNER JOIN recipe_time rt on rt.recipeId = R.id where rt.recipe_time>3600 order by rt.recipe_time DESC;
```

10c) How would you populate these tables with random data for testing?

We can use an ORM data base wrapper to inject data into the database. Or we can create a SQL script that can be used for seeding the database with dummy data. We have to make sure that the database and its tables are created before executing the script. The tables are created on application start. We can load the script via a npm command: npm run seed