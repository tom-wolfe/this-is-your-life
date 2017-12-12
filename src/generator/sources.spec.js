const sources = require('./sources');

describe('sources', () => {
  describe('get', () => {
    it('should expand to all on string all', () => {
      expect(sources.get('ALL')).toBe(sources.ALL);
    });
    it('should expand to all on array all', () => {
      expect(sources.get(['ALL'])).toBe(sources.ALL);
    });
  });
  describe('data', () => {
    it('should get correct data', () => {
      const data = {
        'PHB': 'face',
        'TOA': 'test',
      }
      expect(sources.data(data, ['PHB'])).toEqual(['face']);
      expect(sources.data(data, ['TOA', 'PHB'])).toEqual(['test', 'face']);
      expect(sources.data(data, 'ALL')).toEqual(['face', 'test']);
    });
  });
  describe('flatData', () => {
    it('should get correct data', () => {
      const data = {
        'PHB': ['face', 'face2'],
        'TOA': ['test', 'test2'],
      }
      expect(sources.flatData(data, ['PHB'])).toEqual(['face', 'face2']);
      expect(sources.flatData(data, ['TOA', 'PHB'])).toEqual(['test', 'test2', 'face', 'face2']);
      expect(sources.flatData(data, 'ALL')).toEqual(['face', 'face2', 'test', 'test2']);
    });
  });
});