/**
*
* @licstart  The following is the entire license notice for the JavaScript code in this file. 
*
* ES6 shims that use native implementation if available
*
* Copyright (c) 2016 University Of Helsinki (The National Library Of Finland)
*
* This file is part of es6-shims
*
* es6-shims is free software: you can redistribute it and/or modify
* it under the terms of the GNU Lesser General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.	See the
* GNU Lesser General Public License for more details.
*
* You should have received a copy of the GNU Lesser General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
* @licend  The above is the entire license notice
* for the JavaScript code in this page.
*
**/

(function (root, factory) {
    
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['chai', '../lib/array-find'], factory);
    } else if (typeof exports === 'object' && module.exports) {
	module.exports = factory(require('chai'), require('../lib/array-find'));
    }

}(this, factory));

function factory(chai, arrayFind)
{
 
    'use strict';

    var expect = chai.expect;

   it('Should throw because context argument is undefined', function() {
	expect(arrayFind).to.throw(TypeError, /^Context cannot be null or undefined/);
    });

    it('Should throw because predicate argument is not a function', function() {
	expect(function() {
	    arrayFind([]);
	}).to.throw(TypeError, /^Predicate must be a function/);
    });

    it('Should return the expected element', function() {
	expect(arrayFind([1, 2, 3], function(element) {
	    return element === 2;
	})).to.equal(2);
    });

    it('Should return undefined because the element was not found', function() {
	expect(arrayFind([], function() {})).to.be.an('undefined');
    });
    
}