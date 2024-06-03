import sys
from os.path import extsep, splitext
from openpyxl import load_workbook

filepath = sys.argv[1]

wb = load_workbook(filepath)

for name in wb.sheetnames:
    ws = wb[name]

    # We'll assume that the first column is wavelength
    # and that the column range is contiguous
    # and that we have a header
    columns = ws.columns
    wavelength_column = next(columns)
    wavelengths = [str(cell.value) for cell in wavelength_column if cell.value is not None]

    for column in columns:
        values = [str(cell.value) for cell in column]
        text = "\n".join(f"{wl},{v}" for wl, v in zip(wavelengths, values))
        name, _ext = splitext(filepath)
        name = name.replace(" ", "_")
        colname = values[0].replace(" ", "_")
        csv_path = f"{name}_{colname}{extsep}csv"
        with open(csv_path, 'w') as f:
            f.write(text)
