

function flowChart(){
var data=[]
axios.get("https://api.publicapis.org/entries")
.then((res)=>{
    data=res.data

    console.log(data)
})
.catch(err=>console.log(err))


}

// <link rel="stylesheet" type="text/css" href=" /sites/Secteur_Bank/_catalogs/masterpage/Dashboard/attijari_test/css/global.css">
// <script  src="/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/attijari_test/js/index.js"></script>