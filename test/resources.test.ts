import Resources from '../src/resources';

describe('#Resources', () => {
  describe('#parse', () => {
    it('parses empty resources', () => {
      const resources = Resources.parse('', { checksum: 'checksum' });
      expect(resources.checksum).toEqual('checksum');
      expect(resources.js).toEqual(new Map());
      expect(resources.resources).toEqual(new Map());
    });

    it('parses one resource', () => {
      const resources = Resources.parse('foo application/javascript\ncontent', {
        checksum: 'checksum',
      });
      expect(resources.checksum).toEqual('checksum');
      expect(resources.js).toEqual(new Map([['foo', 'content']]));
      expect(resources.resources).toEqual(
        new Map([['foo', { contentType: 'application/javascript', data: 'content' }]]),
      );
    });

    it('parses two resources', () => {
      const resources = Resources.parse(
        ['foo application/javascript\ncontent1', 'pixel.png image/png;base64\ncontent2'].join(
          '\n\n',
        ),
        { checksum: 'checksum' },
      );
      expect(resources.checksum).toEqual('checksum');
      expect(resources.js).toEqual(new Map([['foo', 'content1']]));
      expect(resources.resources).toEqual(
        new Map([
          ['foo', { contentType: 'application/javascript', data: 'content1' }],
          ['pixel.png', { contentType: 'image/png;base64', data: 'content2' }],
        ]),
      );
    });

    it('robust to weird format', () => {
      const resources = Resources.parse(
        `
# Comment
   # Comment 2
foo application/javascript
content1
# Comment 3

# Type missing
pixel.png
content

# Content missing
pixel.png image/png;base64

# This one is good!
pixel.png   image/png;base64
content2
`,
        { checksum: 'checksum' },
      );
      expect(resources.checksum).toEqual('checksum');
      expect(resources.js).toEqual(new Map([['foo', 'content1']]));
      expect(resources.resources).toEqual(
        new Map([
          ['foo', { contentType: 'application/javascript', data: 'content1' }],
          ['pixel.png', { contentType: 'image/png;base64', data: 'content2' }],
        ]),
      );
    });
  });
});
