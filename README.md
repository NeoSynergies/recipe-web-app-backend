# Recipe Book Backend

Dummy REST service.

Start the server:
``` bash
npm install
npx tsc && node dist/index.js
```

## Usage

The server can be used to save, delete, change, and list arbitrary objects using the following methods:

``` bash
#!/bin/bash

# List recipes
curl localhost:3000/recipes

# List recipes with basic filtering
curl localhost:3000/recipes?title=banana&ingredients=salt

# Add a recipe
curl -H 'Content-type: application/json' localhost:3000/recipes -d '{"title": "new recipe"}'

# Get a specific recipe
curl localhost:3000/recipes/<id>

# Change a specific recipe
curl -H 'Content-type: application/json' localhost:3000/recipes/<id> -d '...' -X PUT

# Delete a specific recipe
curl localhost:3000/recipes/<id> -X DELETE

```

There are some sample recipes in the db. Instead of 'recipe', you can use any string to create a new entity. E.g. create a new entity `ingredients` and add the first item:

```bash
curl -H 'Content-type: application/json' localhost:3000/ingredients -d '{"label": "salt"}'
```

Filtering is only supported for `GET`. For filtering, the values of the objects are stringified and matched against the corresponding query parameter. More parameters lead to less results.


## Recipe sources

- [bbcgoodfood](https://www.bbcgoodfood.com/recipes/collection/five-ingredients-or-less-recipes)
