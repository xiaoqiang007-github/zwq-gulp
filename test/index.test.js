const zwqPages = require('..')

// TODO: Implement module test
test('zwq-pages', () => {
  expect(zwqPages('w')).toBe('w@zce.me')
  expect(zwqPages('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => zwqPages(100)).toThrow('Expected a string, got number')
})
