-- Write an SQL query to list all recipes that take longer than 1 hr, sorted from longest to shortest.
CREATE OR REPLACE VIEW recipe_time as
    select sum(S.time) as recipe_time, S.recipeId
    from Step S
    group by S.recipeId;
SELECT * FROM Recipe R INNER JOIN recipe_time rt on rt.recipeId = R.id where rt.recipe_time>3600 order by rt.recipe_time DESC;

