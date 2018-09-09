var express = require('express');
var Zillow = require("node-zillow");

var zillow = new Zillow("X1-ZWz1gkfsqbdyx7_1pt0f");

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
router.post('/map', function(req, res){
	console.log("You sent %s and %s in the form", req.body.Max, req.body.Min);


	var parameters = {
		state: "TN",
		county: "Davidson",
		childtype: "neighborhood"
	};

	zillow.get("GetRegionChildren", parameters)
		.then(function(results){
			console.log("Whole response");
			console.log(results);
			ZillowData(results);
		})

		res.render('map');
})

var ZillowData = function zillowData(response){
	var j = 0;

	var numberOfLocations = parseInt(response.response.list.count);
	var regionArray = response.response.list.region;

	var neighborhoodsWithZIndex = [];

	for (var i = 0; i < numberOfLocations; ++i){
		var region = regionArray[i];

		if (region.zindex != null){

			var neighborhood = {};

			neighborhood.ZIndex = region.zindex[0]._;
			neighborhood.Lat = region.latitude[0];
			neighborhood.Long = region.longitude[0];

			neighborhoodsWithZIndex.push(neighborhood);

			++j;
		}
	}

	return neighborhoodsWithZIndex;
}
*/

module.exports = router;
