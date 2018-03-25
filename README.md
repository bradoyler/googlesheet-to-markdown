
# GoogleSheet-To-Markdown
> converts a google sheet to a markdown table using [googlesheet-to-json](https://github.com/bradoyler/googlesheet-to-json)

### Run it:
```
git clone git@github.com:bradoyler/googlesheet-to-markdown.git
cd googlesheet-to-markdown
npm install
npm start
```

### Setup API Credentials:
`cp config.example.json config.json`
see [googlesheet-to-json](https://github.com/bradoyler/googlesheet-to-json) for getting Credentials

### TODOs:
- add CLI
- setup as a npm package

### Example output:
> Spreadsheet of charting libraries
|name|d3|v4|framework|repo|homepage|demos|last updated|
|----|----|----|----|----|----|----|----|
|Britecharts|TRUE|TRUE|vanilla|https://github.com/eventbrite/britecharts/|http://eventbrite.github.io/britecharts|http://eventbrite.github.io/britecharts/tutorial-bar.html|10/4/2017|
|Semiotic|TRUE|TRUE|React|https://github.com/emeeks/semiotic|https://emeeks.github.io/semiotic/#/|https://emeeks.github.io/semiotic/#/semiotic/examples|10/3/2017|
|vx|TRUE|TRUE|React|https://github.com/hshoff/vx|https://vx-demo.now.sh/|https://vx-demo.now.sh/gallery|9/21/2017|
|nvd3|TRUE|FALSE|vanilla|https://github.com/novus/nvd3|http://nvd3.org/|http://nvd3.org/examples/index.html|9/9/2017|
|dc.js|TRUE|FALSE|vanilla|https://github.com/dc-js/dc.js|https://dc-js.github.io/dc.js/|https://dc-js.github.io/dc.js/|9/19/2017|
|react-vis|TRUE|TRUE|React|https://github.com/uber/react-vis|https://uber.github.io/react-vis/|https://uber.github.io/react-vis/examples/showcases/plots|10/05/2017|
|deck.gl|FALSE||React|https://github.com/uber/deck.gl|https://uber.github.io/deck.gl/#/|https://uber.github.io/deck.gl/#/examples/overview|10/03/2017|
|d4|TRUE|FALSE|vanilla|https://github.com/heavysixer/d4|http://visible.io/|http://visible.io/examples.html|3/29/2016|
|Plottable|TRUE|TRUE|vanilla|https://github.com/palantir/plottable|http://plottablejs.org/|http://plottablejs.org/examples/|9/20/2017|
|d3.Chart|TRUE|FALSE|vanilla|https://github.com/misoproject/d3.chart|http://misoproject.com/d3-chart/|http://misoproject.com/d3-chart/charts.html|1/23/2016|
|Dimple|TRUE|TRUE|vanilla|https://github.com/PMSI-AlignAlytics/dimple|http://dimplejs.org/|http://dimplejs.org/examples_index.html|12/16/2016|
|Kotojs|TRUE|FALSE|vanilla|https://github.com/kotojs/kotojs|http://kotojs.org/|http://kotojs.org/docs/|10/01/2016|
|MetricsGraphics|TRUE|TRUE|vanilla|https://github.com/mozilla/metrics-graphics|https://www.metricsgraphicsjs.org/|https://www.metricsgraphicsjs.org/examples.htm|04/20/2017|
|Epoch|TRUE|FALSE|vanilla|https://github.com/epochjs/epoch|http://epochjs.github.io/epoch|http://epochjs.github.io/epoch/basic/|03/14/2016|
|xCharts|TRUE|FALSE|vanilla|https://github.com/tenXer/xcharts/|http://tenxer.github.io/xcharts/|http://tenxer.github.io/xcharts/examples/|08/08/2013|
|Rickshaw|TRUE|FALSE|vanilla|https://github.com/shutterstock/rickshaw|http://code.shutterstock.com/rickshaw/|http://code.shutterstock.com/rickshaw/examples/|09/20/2017|
