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
// Handle Gas create on POST.
exports.mat_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Mat();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gas_type":"regular", "quantity":13, "cost":43.56}
    document.mat_type = req.body.gas_type;
    document.quantity = req.body.quantity;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Gas delete form on DELETE.
exports.mat_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Gas delete DELETE ' + req.params.id);
};
// Handle Gas update form on PUT.
exports.mat_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Gas update PUT' + req.params.id);
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