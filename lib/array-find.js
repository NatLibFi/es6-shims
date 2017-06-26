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

/* istanbul ignore next */
(function (root, factory) {
    
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object' && module.exports) {
	module.exports = factory();
    } else {
	root.arrayFind = factory();
    }

}(this, factory));

function factory()
{
 
    'use strict';

    /**
     * @internal This implementation is based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#Polyfill
     **/
    return function(context, predicate, this_arg)
    {

	function iterate()
	{
	    if (offset < length) {
		if (predicate.call(this_arg, list[offset], offset, list)) {
		    return list[offset];
		} else {
		    offset++;
		    return iterate();
		}
	    }
	}
	
	var list, length,
	offset = 0;

	if (!context) {
	    throw new TypeError('Context cannot be null or undefined');
	} else if (typeof predicate !== 'function') {
	    throw new TypeError('Predicate must be a function');
	} else {
	    
	    list = Object(context);
	    length = list.length >>> 0;

	    return iterate();

	}

    };

}