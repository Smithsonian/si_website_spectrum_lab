import re
from os.path import extsep, splitext
import sys

filepath = sys.argv[1]

if filepath:
    with open(filepath, 'r') as f:
        text = f.read()
    text = re.sub('\\s', '', text)

    xs, ys = [c.split(",") for c in text.split("&")]    

    name, ext = splitext(filepath)
    if ext == ".csv":
        name = f"{name}_csv"
    modified_path = f"{name}{extsep}csv"

    with open(modified_path, 'w') as f:
        for x, y, in zip(xs, ys):
            f.write(f"{x}\t{y}\n")
