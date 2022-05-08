Backend

1. Given a list of integers, return a tuple containing the sum of all odd values and the product of all even values.
   Ex: [4,2,5,7,3,6,9] => (24, 48)

2. Given a string written in kebab-case, convert it to SCREAMING_SNAKE_CASE
   Ex: "electricity-is-really-just-organized-lightning" => "ELECTRICITY_IS_REALLY_JUST_ORGANIZED_LIGHTNING"

3. A product can be made of multiple parts, which themselves can be made of more parts. Given a final product and a dictionary of key-value pairs, where the product is the key and a list of parts are the values, write a function to return the count of each part that is needed to construct the final product.

parts = {
'A': ['B', 'B', 'C'],
'B': [],
'C': ['D','E','F'],
'D': [],
'E': ['B','D'],
'F': []
}

Ex: 'A' => {'B': 3, 'D': 2, 'F': 1}
Ex: 'F' => {'F': 1}

4. Write the recursive version of the previous problem. If you have already done so, write the iterative version.

5. Write a regular expression to match any word that begins with a "#" and contains any of the following strings (case insensitive): ["odoo", "oxp", "openerp"]
   Ex: Match "#odoo", "#oxp2022", "#doyouodoo?", "#ILOVEODOO"

Front End

6. Create a numpad and display similar to the one shown in the link using flex-box or css-grid.

https://gist.github.com/jot-odoo/e8dd91a994e85248c571963b6c7c4262

7. Implement the display functionality using the numpad as clickable inputs. It should behave like a calculator display (i.e. clicking digits adds them to the right).

8 OPTION A) Implement the "START" button. When clicked, the calculator display should count down by 1 rapidly until it hits 0. When it finally hits 0, make the display say "Happy Birthday!"
8 OPTION B) Implement the "RAND" button. When clicked, fetch a random int using this URL, https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new, and show it on the display.

9.  Go to https://www.odoo.com/pricing. Write a script to do the following via jQuery: 1. Set the number of users to 10. 2. Select the following apps: Website, Project, IoT Boxes 3. Select 5 IoT Boxes. 4. Show an alert with the average monthly rate when billed monthly.

Database

Option 1:
Design a database to manage library book loans.
10a) Write SQL statements to create tables for books and loans. The loans table should have columns for the dates borrowed, due, and returned.
10b) Write an SQL query to list all overdue books in order from most to least overdue.
10c) How would you populate these tables with random data for testing?

Option 2:
Design a database to maintain a catalog of cooking recipes.
10a) Write SQL statements to create tables for recipes, steps, and ingredients. You need to be able to see how long each individual step takes in minutes.
10b) Write an SQL query to list all recipes that take longer than 1 hr, sorted from longest to shortest.
10c) How would you populate these tables with random data for testing?
