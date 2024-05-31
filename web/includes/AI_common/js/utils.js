export function parseText(text) {
  const loadedDataArray = text.split("&");
  if (loadedDataArray.length !== 2) {
    return [null, null];
  }
  const x = loadedDataArray[0].split(",");
  const y = loadedDataArray[1].split(",");
  return [x, y];
}

export function parseCSV(text, delimiter=",") {
  const x = [];
  const y = [];
  const rows = text.split("\n").filter(t => t.length > 0);
  for (const row of rows)
  {
    const columns = row.split(delimiter);
    if (columns.length !== 2) {
      return [null, null];
    }
    x.push(columns[0]);
    y.push(columns[1]);
  }
  return [x, y];
}

export function parseFileContents(text) {
  const columns = parseCSV(text);
  if (columns.some(t => t === null)) {
    return parseText(text);
  }
  return columns;
}

export function peakNormalize(data, peakTo=0.95) {
  const max = Math.max.apply(null, data);
  const factor = peakTo / max;
  return data.map(v => factor * v);
}
