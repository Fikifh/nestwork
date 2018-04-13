const httpStatus = require('http-status');
const { omit } = require('lodash');
const Cuti = require('../models/cuti');
const { handler: errorHandler } = require('../../middleware/error');


/**
 * Post Present
 * @private
 */
exports.ajukan = async (req, res, next) => {
  	try{
  		const cuti = new Cuti(req.body);
   		const savedcuti = await cuti.save();        
        const cutiTransformed = savedcuti.transform();     
        res.status(httpStatus.CREATED);
        return res.json(cutiTransformed);
    }catch(error){
        return error;
    }
}
