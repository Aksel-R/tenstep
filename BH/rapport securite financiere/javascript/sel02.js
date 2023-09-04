function loadSel02() {
	var sel01 = document.getElementById("myList01").value;
	$('#myList02').empty();
	console.log("sel01= "+sel01);
	if (sel01=='Mensuel') {
		
		moisSelectFilter();
	}else if (sel01=='Trimestriel') {
		
		trimestreSelectFilter();
	}else if (sel01=='Annuel') {
		
		AnneeSelectFilter();
	}
}

function moisSelectFilter() {
  moment.locale('fr');
  var arrMois=[];
  var arrMois1=[];
  var moisActuel= moment().format('YYYY-MM-DD');
  var dateCount= moment([2021, 1, 1]).format('YYYY-MM-DD');
  dateCount=moment(dateCount).add(-1, 'months');
  do {
    arrMois.push(moment(dateCount).format('YYYY-MM'));
    arrMois1.push(moment(dateCount).format('YYYY-MM-DD'));
    dateCount=moment(dateCount).add(1, 'months');
  } while (moment(dateCount).isSameOrBefore(moisActuel));
  
  var finalArrMois=arrMois.reverse();
  var finalArrMois1=arrMois1.reverse();
  console.log("finalArrMois= "+finalArrMois);
  for (var i = 0; i < finalArrMois.length; i++) {
    $('#myList02').append($('<option>',
    {
      text : finalArrMois[i],
      value:finalArrMois1[i]
    })); 
    var opt = {};
    $("#myList02 > option").each(function () {
      if(opt[$(this).text()]) {
          $(this).remove();
      } else {
          opt[$(this).text()] = $(this).val();
      }
    });
  }
}


function trimestreSelectFilter() {
  moment.locale('fr');
  var arrMois=[];
  var arrMois1=[];
  var moisActuel= moment().format('YYYY-MM-DD');
  var dateCount= moment([2021, 1, 1]).format('YYYY-MM-DD');
  dateCount=moment(dateCount).add(-1, 'months');
  do {
    var mm=moment(dateCount).format('MM');
    var aa=moment(dateCount).format('YYYY');
    var tempMoment="";
    if (mm=="01") {
      tempMoment="T1 "+aa;
    }else if (mm=="04") {
      tempMoment="T2 "+aa;
    }else if (mm=="07") {
      tempMoment="T3 "+aa;
    }else if (mm=="10") {
      tempMoment="T4 "+aa;
    }
    // console.log("mm= "+mm);
    // console.log("aa= "+aa);
    arrMois.push(tempMoment);
    arrMois1.push(moment(dateCount).format('YYYY-MM-DD'));
    dateCount=moment(dateCount).add(3, 'months');
  } while (moment(dateCount).isSameOrBefore(moisActuel));
  
  var finalArrMois=arrMois.reverse();
  var finalArrMois1=arrMois1.reverse();
  console.log("finalArrMois= "+finalArrMois);
  for (var i = 0; i < finalArrMois.length; i++) {
    $('#myList02').append($('<option>',
    {
      text : finalArrMois[i],
      value:finalArrMois1[i]
    })); 
    var opt = {};
    $("#myList02 > option").each(function () {
      if(opt[$(this).text()]) {
          $(this).remove();
      } else {
          opt[$(this).text()] = $(this).val();
      }
    });
  }
}

function AnneeSelectFilter() {
  moment.locale('fr');
  var arrMois=[];
  var arrMois1=[];
  var moisActuel= moment().format('YYYY-MM-DD');
  var dateCount= moment([2021, 1, 1]).format('YYYY-MM-DD');
  dateCount=moment(dateCount).add(-1, 'months');
  do {
    arrMois.push(moment(dateCount).format('YYYY'));
    arrMois1.push(moment(dateCount).format('YYYY-MM-DD'));
    dateCount=moment(dateCount).add(1, 'years');
  } while (moment(dateCount).isSameOrBefore(moisActuel));
  
  var finalArrMois=arrMois.reverse();
  var finalArrMois1=arrMois1.reverse();
  console.log("finalArrMois= "+finalArrMois);
  for (var i = 0; i < finalArrMois.length; i++) {
    $('#myList02').append($('<option>',
    {
      text : finalArrMois[i],
      value:finalArrMois1[i]
    })); 
    var opt = {};
    $("#myList02 > option").each(function () {
      if(opt[$(this).text()]) {
          $(this).remove();
      } else {
          opt[$(this).text()] = $(this).val();
      }
    });
  }
}
