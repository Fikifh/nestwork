const httpStatus = require('http-status');
const { omit } = require('lodash');
const Present = require('../models/presensi');
const { handler: errorHandler } = require('../../middleware/error');


/**
 * Post Present
 * @private
 */
exports.present = async (req, res, next) => {
  	try{
  		const kehadiran = new Present(req.body);
   		const savedKehadiran = await kehadiran.save();        
        const PresentTransformed = savedKehadiran.transform();     
        res.status(httpStatus.CREATED);
        return res.json(PresentTransformed);
    }catch(error){
        return error;
    }
}
