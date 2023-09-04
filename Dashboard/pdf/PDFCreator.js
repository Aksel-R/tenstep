
<head>
<style>
#show-button { cursor: pointer; }
#hide-button { cursor: pointer; display: none; }

/*Some stylings to the buttons*/
#show-button, #hide-button  { color: #fff; border-radius: 5px; padding: 10px 50px; }
#show-button { background: #0703af; }
#hide-button { background: #af2303; }
</style>
</head>


<script src="https://cdn.flexmonster.com/flexmonster.js"></script>
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/javascript/jquery.min.js"></script>
<div id="pivot-container"></div>

<button id="show-button" onclick="test();return false;">Show button</button>
<button id="hide-button">Hide button</button>


<script type="text/javascript">
new Flexmonster({
  container: "#pivot-container",
  componentFolder: "https://cdn.flexmonster.com/",
  width: "100%",
  height: 430,
  toolbar: true,
  report: {
    dataSource: {
      filename: "data/sales.csv"
    },
    slice: {
      columns: [{
        uniqueName: "Month"
      }, {
        uniqueName: "[Measures]"
      }],
      rows: [{
        uniqueName: "Category",
        filter: {
          members: [
            "category.[condiments].[bbq sauce]",
            "category.[breakfast cereals].[corn flakes]",
            "category.[confectionery]",
            "category.[bakery].[chocolate biscuits]",
            "category.[fruit preserves].[apple jam]",
            "category.[bakery].[apple cake]",
            "category.[soups].[tomato soup]"
          ]
        }
      }],
      measures: [{
        "uniqueName": "Revenue",
        "aggregation": "sum",
        "format": "2sfou03a"
      }]
    },
    conditions: [{
      formula: "#value < 2500",
      measure: "Revenue",
      format: {
        backgroundColor: "#df3800",
        color: "#FFFFFF"
      },
      isTotal: false
    }, {
      formula: "#value > 20000",
      measure: "Revenue",
      format: {
        backgroundColor: "#00A45A",
        color: "#FFFFFF"
      },
      isTotal: false
    }],
    formats: [{
      name: "2sfou03a",
      thousandsSeparator: ",",
      decimalSeparator: ".",
      decimalPlaces: 2,
      currencySymbol: "$",
      currencySymbolAlign: "left",
      nullValue: "",
      textAlign: "right",
      isPercent: false
    }]
  }
});


function test(){

   $("#hide-button").show();
  }


</script>