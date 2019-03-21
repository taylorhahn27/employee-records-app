"""
Parses timecards.json and populates the local db by sending http requests
to the server

TODO: Make asynchronous
"""
import requests as r
import json

json_file = open('timecards.json')  # pull file into environment

with open('timecards.json') as f:
    data = json.loads(f.read())

# Modify the next two lines to adjust amount of data to send to db. If commented out, all data to db.
# num_jsons_to_db = 10
# data = data[:num_jsons_to_db]

for json_obj in data:
    r.post('http://127.0.0.1:8000/records/', data=json_obj)
