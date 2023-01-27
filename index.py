from src import create
from src.config import Config
from src.models import db

app = create()


# Utilize config class
config_inst = Config()
config = config_inst.__dict__
app.config["SECRET_KEY"] = config["secret_key"]
for key, value in config["config"].items():
    app.config[key.upper()] = value

db.init_app(app)

from src.routes import api
app.register_blueprint(api)