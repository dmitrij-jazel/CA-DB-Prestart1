
function getCountry(brand) {

  var countries = {
	  'germany': 'Europe',
	  'france': 'Europe',
	  'italy':'Europe',
	  'ussr':'USSR',
	  'czech':'Europe',
	  'japan': 'Asia'	  
  }

  if(brand.toLowerCase() == "audi" || brand.toLowerCase() == 'bmw' || brand.toLowerCase() == 'vw') {
    return countries.germany;
  } else if (brand.toLowerCase() == 'citroen') {
    return countries.france;
  } else if(brand.toLowerCase() == 'fiat') {
    return countries.italy;
  } else if(brand.toLowerCase() == 'lada') {
    return countries.ussr;
  } else if(brand.toLowerCase() == 'mazda') {
    return countries.japan;
  } else if(brand.toLowerCase() == 'skoda') {
    return countries.czech;
  }
}