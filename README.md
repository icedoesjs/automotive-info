# automotive-info
A simple automotive website written in Next,js and using a RESTFUL Flask API

## Technologies
- Flask (API)
- Postgres (could use MySQL as well but I tend to prefer postgres because of the syntax)
- Next.JS (originally started with React but I prefer Next's routing)
- Boostrap5 (for ease of styling as well as less time spent styling)

## Languages
- TypeScript
- JavaScript
- Python

## Deploying
- Create an ENV in API folder via python
- Install requirements (**pip install -m requirements.txt**)
- Install modules in frontend folder (**npm i**)
- Edit config.yaml in api folder
- Edit secrets.js in frontend
- Run API using **python run.py**
- Run frontend using **npm run dev**

## Known flaws
- Styles sometimes glitching but fixed on page reload (assuming app size)
- Load times are sometimes close to 200ms, could be optimized given more time
