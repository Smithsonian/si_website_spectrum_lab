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
        fieldnames = [
            "category",
            "filename",
            "title",
            "spectrumType",
            "imageName",
            "imageLink",
            "bigImageName",
            "bigImageLink",
            "creditName",
            "creditLink",
            "howTaken",
            "notes"
        ]
        reader = csv.DictReader(i_file, fieldnames)
        output_list = [row for row in reader]
        json.dump(output_list, o_file)
