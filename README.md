# automotive-info
A simple automotive written in Next,js and using a RESTFUL Flask API

## Deploying
- Create an ENV in API folder via python
- Install requirements (**pip install -m requirements.txt**)
- Install modules in frontend folder (**npm i**)
- Edit config.yaml in api folder
- Edit secrets.js in frontend
- Run API using **python run.py**
- Run frontend using **npm run dev**

## Known flaws
- Only 1 email (my personal email) used for garage function, read file notes why
- Index page hook being sent to API every load, read file notes
- Styles sometimes glitching but fixed on page reload (assuming app size)
- Load times are sometimes close to 200ms, could be optimized given more time
