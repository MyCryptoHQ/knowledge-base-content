const fs = require('fs');
const slash = require('slash');
const frontmatter = require('gray-matter');
const moment = require('moment');

/**
 * Automatically update the `date_modified` field of a page to the current date.
 */
process.argv.slice(2).forEach(dirtyPath => {
  const path = slash(dirtyPath);

  if (path.includes('README.md')) {
    return;
  }

  const page = frontmatter(fs.readFileSync(path, 'utf-8'));

  const newData = {
    ...page.data,
    date_published: moment.utc(page.data.date_published).format('YYYY-MM-DD'),
    date_modified: moment.utc().format('YYYY-MM-DD')
  };

  const newPage = frontmatter.stringify(page.content, newData);

  fs.writeFileSync(path, newPage, 'utf-8');
});
