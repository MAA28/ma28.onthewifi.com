import json
from flask import Flask
import os
app = Flask(__name__)

@app.route('/blogs/<title>')
def get_blog(title):
    title = title.split('=')[1]

    with open(f"./Blogs/{title}.md", 'r') as file:
        text = file.read()
    return json.dumps({
        'title': title,
        'content':text
    })

@app.route('/blogs')
def get_blogs():
    return json.dumps([dir.split('.')[0] for dir in os.listdir('./Blogs')])

app.run()