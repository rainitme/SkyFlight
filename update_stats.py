import json, random
from datetime import datetime

with open('stats.json') as f:
    data = json.load(f)

for pilot in data['pilots']:
    pilot['hours'] += random.randint(1, 3)
    pilot['flights'] += random.randint(0, 2)

data['last_updated'] = datetime.utcnow().isoformat()

with open('stats.json', 'w') as f:
    json.dump(data, f, indent=2)
