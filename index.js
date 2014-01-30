var t = require('turf')

// load countries
t.load('./countries.geojson', function(err, countries){
  // merge the feature collection
  t.merge(countries, function(err, world){
    // write out the file
    fs.writeFile('./world.geojson', world, function(err){
      console.log('presto!')
    })
  })
})