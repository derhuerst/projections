'use strict'

const h = require('./helpers')

const gallPeters = (point, opt) => {
	point = h.check(point)
	opt = h.options(opt)
	if(point.wgs){
		point = h.addMeridian(point, opt.meridian)
		return {
			x: h.rad(point.lon)/(2*Math.PI)+0.5,
			y: (1-h.sin(point.lat))/Math.PI
		}
	}
	else{
		const result = {
			lon: h.deg((2*point.x-1)*Math.PI),
			lat: h.deg(Math.asin(1-point.y*Math.PI))
		}
		return h.addMeridian(result, opt.meridian*(-1))
	}
}

module.exports = gallPeters
