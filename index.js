const fs = require('fs')
const config = require('./config.json').google // see 'Getting Credentials' below
const GoogleSheetToJSON = require('googlesheet-to-json')
const gSheetToJSON = new GoogleSheetToJSON(config)
const md = require('json-to-markdown')

const options = {
    spreadsheetId: '1k-GVrhLw2_KdSvfCOt3RzF6otWfZQ5rbsBpVnTP425w',
    range: 'Sheet1',
    oAuthTokens: config.oAuthTokens
}

gSheetToJSON.getRows(options)
.then((rows) => {
  const columns = Object.keys(rows[0])
  const tableMdString = md(rows, columns)
  let output =
`
# GoogleSheet-To-Markdown
> converts a google sheet to a markdown table using [googlesheet-to-json](https://github.com/bradoyler/googlesheet-to-json)

### Run it:
\`\`\`
git clone git@github.com:bradoyler/googlesheet-to-markdown.git
cd googlesheet-to-markdown
npm install
npm start
\`\`\`

### Setup API Credentials:
\`cp config.example.json config.json\`
see [googlesheet-to-json](https://github.com/bradoyler/googlesheet-to-json) for getting Credentials

### TODOs:
- add CLI
- setup as a npm package

### Example output:
> Spreadsheet of charting libraries
`

  output += tableMdString
  fs.writeFileSync('README.md', output)
})
.catch(console.error)
