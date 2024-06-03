from csv import reader 
from os.path import extsep, splitext
import sys

filepath = sys.argv[1]

def is_header_row(row):
    try:
        [float(v) for v in row]
        return False 
    except ValueError:
        return True 

if filepath:
    x, y = [], []
    with open(filepath, 'r') as f:
        r = reader(f)
        it = iter(r)
        row = next(it)
        if not is_header_row(row):
            x.append(row[0])
            y.append(row[1])

        # We only take the first two columns
        # because that's all that gets used of the txt files
        for row in it:
            x.append(row[0])
            y.append(row[1])

    text = " & ".join(", ".join(a) for a in (x, y))
    name, _ext = splitext(filepath)
    txt_path = f"{name}{extsep}txt"

    with open(txt_path, 'w') as f:
        f.write(text)
