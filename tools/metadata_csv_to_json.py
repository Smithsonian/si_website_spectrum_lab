import csv
import json
import sys
from os.path import extsep, splitext

input_path = sys.argv[1]

if not input_path:
    exit()

name, _ext = splitext(input_path)
output_path = f"{name}{extsep}json"

with open(input_path, 'r') as i_file:
    with open(output_path, 'w') as o_file:
        headers_by_key = {
            "category": "Category",
            "filename": "Filename",
            "title": "Title",
            "spectrumType": "Spectrum type",
            "realOrCalculated": "Real data or calculated model?",
            "imagePath": "Image path",
            "bigImagePath": "Big image path",
            "how": "How",
            "spectrumSource": "Spectrum Source (markdown)",
            "spectrumCredit": "Spectrum Credit (markdown)",
            "additionalInfo": "Additional Info",
        }
        reader = csv.DictReader(i_file)
        output_list = []
        for row in reader:
            mapped_row = dict()
            for key, header in headers_by_key.items():
                value = row.get(header, '')
                if value:
                    mapped_row[key] = value
            output_list.append(mapped_row)

        json.dump(output_list, o_file)
