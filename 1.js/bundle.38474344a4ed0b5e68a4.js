webpackJsonp([1],{1403:function(e,n,o){var r=o(75),a=o(8),t=o(9).PageRenderer;t.__esModule&&(t=t.default);var l=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:o(1436)}},componentWillMount:function(){},render:function(){return r.createElement(t,Object.assign({},this.props,{content:this.state.content}))}});l.__catalog_loader__=!0,e.exports=l},1436:function(e,n){e.exports="Reactabular provides three components: `Table.Provider`, `Table.Header`, and `Table.Body`. `Table.Provider` sets the data context. It may contain multiple `Table.Header` and `Table.Body` elements. You can control data per body while the provider maintains a shared column definition.\n\n## `Table.Provider`\n\n`Table.Provider` is the core of Reactabular. It sets up a [context](https://facebook.github.io/react/docs/context.html) and maps the `column` definition to its children components. The following example illustrates the basic idea.\n\n```jsx\n/*\nimport * as Table from 'reactabular-table';\n*/\n\nconst rows = [\n  {\n    id: 100,\n    name: 'Adam',\n    dad: 'John',\n    lovesBeeGees: true\n  },\n  {\n    id: 101,\n    name: 'Brian',\n    dad: 'George',\n    lovesBeeGees: false\n  },\n];\n\nconst columns = [\n  {\n    property: 'name',\n    header: {\n      label: 'Name'\n    }\n  },\n  {\n    property: 'dad',\n    header: {\n      label: 'Dad'\n    }\n  }\n];\n\n<Table.Provider\n  className=\"pure-table pure-table-striped\"\n  columns={columns}\n>\n  <Table.Header />\n\n  <Table.Body rows={rows} rowKey=\"id\" />\n</Table.Provider>\n```\n\n## `Table.Header`\n\n`Table.Header` renders a table header within a `Table.Provider` context.\n\n```react\n<Table.Provider\n  className=\"pure-table pure-table-striped\"\n  columns={columns}\n>\n  <Table.Header />\n\n  <Table.Body rows={rows} rowKey=\"id\"/>\n\n  <Table.Header />\n</Table.Provider>\n```\n\n## Customizing `Table.Header`\n\nIt is possible to customize a header by passing child components to it. This way you can implement filtering per column for instance.\n\nHere `search.Columns` injects an additional row for the filter controls. An alternative way to handle it would be to push the problem to the column definition.\n\n```react\n<Table.Provider\n  className=\"pure-table pure-table-striped\"\n  columns={columns}\n>\n  <Table.Header>\n    <search.Columns\n      query={{}}\n      columns={columns}\n      onChange={value => console.log('new value', value)}\n    />\n  </Table.Header>\n\n  <Table.Body rows={rows} rowKey=\"id\" />\n</Table.Provider>\n```\n\n## `Table.Body`\n\n`Table.Body` renders table `rows` within a `Table.Provider` context. It accepts either an array of objects or an array of arrays (see the [Excel example](/examples/excel)). In the former case you should define a `rowKey`. This allows React to render in a more performant way.\n\nMost often you'll define `rowKey` as a string. An alternative is to define it using a function like this: `rowKey={({ rowData, rowIndex }) => rowData.nested.id}`. This is useful if your key is nested or related to some other data. Another way to avoid this problem is to generate the field using `reactabular-resolve` and then point to that through a string.\n\n**Example:**\n\n```react\n<Table.Provider\n  className=\"pure-table pure-table-striped\"\n  columns={columns}\n>\n  <Table.Header />\n\n  <Table.Body rows={rows.filter(r => r.name === 'Adam')} rowKey=\"id\" />\n\n  <Table.Header />\n\n  <Table.Body rows={rows.filter(r => r.name === 'Brian')} rowKey=\"id\" />\n</Table.Provider>\n```\n\n## Getting Refs\n\nSometimes you might need to access the underlying DOM nodes for measuring etc. This can be achieved as follows:\n\n```react\nclass RefTable extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.onRow = this.onRow.bind(this);\n\n    this.headerRef = null;\n    this.bodyRef = null;\n  }\n  render() {\n    return (\n      <Table.Provider columns={columns}>\n        <Table.Header\n          ref={header => {\n            this.headerRef = header && header.getRef();\n          }}\n        />\n        <Table.Body\n          ref={body => {\n            this.bodyRef = body && body.getRef();\n          }}\n          rows={rows}\n          rowKey=\"id\"\n          onRow={this.onRow}\n        />\n      </Table.Provider>\n    );\n  }\n  onRow(row, { rowIndex, rowKey }) {\n    return {\n      onClick: () => console.log(this.headerRef, this.bodyRef)\n    };\n  }\n}\n\n<RefTable />\n```\n\n## Customizing `Table.Header` and `Table.Body` Rows\n\nIt is possible to customize body behavior on a row level. `onRow` prop accepts function `(row, { rowIndex, rowKey }) => ({...})` that allows you to set custom attributes per each row.\n\n```react\nclass CustomTable extends React.Component {\n  render() {\n    return (\n      <Table.Provider\n        className=\"pure-table pure-table-striped\"\n        columns={columns}\n      >\n        <Table.Header\n          onRow={this.onHeaderRow}\n        />\n\n        <Table.Body\n          rows={rows}\n          rowKey=\"id\"\n          onRow={this.onBodyRow}\n        />\n      </Table.Provider>\n    );\n  }\n  onHeaderRow(row, { rowIndex }) {\n    return {\n      onClick: () => console.log('clicked header row', row)\n    };\n  }\n  onBodyRow(row, { rowIndex, rowKey }) {\n    return {\n      onClick: () => console.log('clicked body row', row)\n    };\n  }\n}\n\n<CustomTable />\n```\n\nIt's a good idea to define a possible `row` handler separately to avoid binding per each `render`. If you write the handler inline, it will bind each time `render()` is called and reduce performance slightly.\n\n## Customizing `Table` Footer\n\nIt is possible to inject a custom footer like this:\n\n```react\n<Table.Provider\n  className=\"pure-table pure-table-striped\"\n  columns={columns}\n>\n  <Table.Header />\n\n  <Table.Body rows={rows} rowKey=\"id\" />\n\n  <tfoot>\n    <tr>\n      <td>Show custom rows here</td>\n      <td>Show custom rows here</td>\n    </tr>\n  </tfoot>\n</Table.Provider>\n```\n\n## See Also\n\n* [Selection](http://reactabular.js.org/#/examples/selection)\n"}});