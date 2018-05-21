function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    if (arrPenumpang.length === 0) {
        return [];
    }
    var output = [];
    for (var i = 0; i < arrPenumpang.length; i++) {
        var obj = {};
        obj.Penumpang = arrPenumpang[i][0];
        obj.naikDari = arrPenumpang[i][1];
        obj.tujuan = arrPenumpang[i][2];
        obj.bayar = 2000 * (rute.indexOf(obj.tujuan) - rute.indexOf(obj.naikDari));
        output.push(obj);
    }
    return output;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]