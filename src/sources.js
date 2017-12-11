const sources = [
  'EE',
  'PHB',
  'TOA',
  'SCG',
  'COS',
  'XGE',
  'VGM'
];

function get(s) {
  if (s === 'ALL' || s.indexOf('ALL') > -1) {
    return sources;
  } else {
    return s;
  }
}

function data(d, s) {
  return get(s).map(src => d[src]).filter(d => d);
}

function flatData(d, s) {
  return [].concat.apply([], data(d, s));
}

module.exports = {
  ALL: sources,
  get,
  data,
  flatData
}