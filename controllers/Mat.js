const Mat = require('../models/Mat');
var mat = require('../models/Mat');
// List of all Gass
exports.mat_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Gas list');
};
// for a specific Gas.
exports.mat_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Gas detail: ' + req.params.id);
};
// Handle mat create on POST.
exports.mat_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Mat();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    
    document.color = req.body.color;
    document.length = req.body.length;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Mat delete form on DELETE.
exports.mat_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Mat delete DELETE ' + req.params.id);
};
// Handle Mat update form on PUT.
exports.mat_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Mat update PUT' + req.params.id);
};

// List of all mats
exports.mat_list = async function (req, res) {
    try {
        theMat = await mat.find();
        res.send(theMat);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.Mat_view_all_Page = async function (req, res) {
    try {
      theMat = await Mat.find();
        res.render('Mat', {
            title: 'Mat Search Results',
            results: theMat
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
exports.mat_detail = async function(req, res) {
  console.log("detail" + req.params.id)
  try {
  result = await Mat.findById( req.params.id)
  res.send(result)
  } catch (error) {
  res.status(500)
  res.send(`{"error": document for id ${req.params.id} not found`);
  }
  };

  // Handle Costume update form on PUT.
  exports.mat_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Mat.findById( req.params.id)
    // Do updates of properties
    if(req.body.color)
    toUpdate.color = req.body.color;
    if(req.body.length) toUpdate.length = req.body.length;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };