from csv import reader 
from os.path import extsep, splitext
import sys

filepath = sys.argv[1]

if filepath:
    x, y = [], []
    with open(filepath, 'r') as f:
        r = reader(f)

        # We only take the first two columns
        # because that's all that gets used of the txt files
        for row in r:
            x.append(row[0])
            y.append(row[1])

    text = " & ".join(", ".join(a) for a in (x, y))
    name, _ext = splitext(filepath)
    txt_path = f"{name}{extsep}txt"

    with open(txt_path, 'w') as f:
        f.write(text)
