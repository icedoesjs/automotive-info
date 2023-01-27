from flask import Flask 
from flask_migrate import Migrate 
from werkzeug.middleware.proxy_fix import ProxyFix
import os

migrate = Migrate()

def create(**kwargs):
    import threading 
    threading.stack_size(2 * 1024 * 1024)
    
    app = Flask(__name__, **kwargs)
    app.wsgi_app = ProxyFix(app.wsgi_app)
    
    return app
