export function parseText(text) {
  const loadedDataArray = text.split("&");
  if (loadedDataArray.length !== 2) {
    return [[null, null], [null, null]];
  }
  const x = loadedDataArray[0].split(",");
  const y = loadedDataArray[1].split(",");
  return [[x, y], [null, null]];
}

export function isHeaderRow(row, delimiter=",") {
  const columns = row.split(delimiter);
  return columns.some(c => isNaN(parseFloat(c)));
}

export function parseCSV(text, delimiter=",") {
  const x = [];
  const y = [];
  const rows = text.split("\n").filter(t => t.length > 0);
  const hasHeader = isHeaderRow(rows[0]);
  let colNames = [null, null];
  if (hasHeader) {
    const headerRow = rows.shift();
    colNames = headerRow.split(delimiter);
  }
  for (const row of rows)
  {
    const columns = row.split(delimiter);
    if (columns.length !== 2) {
      return [[null, null], colNames];
    }
    x.push(columns[0]);
    y.push(columns[1]);
  }
  return [[x, y], colNames];
}

export function parseFileContents(text) {
  const parsed = parseCSV(text);
  const columns = parsed[0];
  if (columns.some(t => t === null)) {
    return parseText(text);
  }
  return parsed;
}

export function rangeNormalize(data, minTo=0.05, maxTo=0.95) {
  const min = Math.min.apply(null, data);
  const max = Math.max.apply(null, data);
  const slope = (maxTo - minTo) / (max - min);
  const intercept = minTo - slope * min;
  const transform = (v) => slope * v + intercept;
  return data.map(transform);
}
