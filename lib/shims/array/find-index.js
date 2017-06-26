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
        define(['../../array-find-index'], factory);
    } else if (typeof exports === 'object' && module.exports) {
	module.exports = factory(require('../../array-find-index'));
    } else {
	root.shimArrayFindIndex = factory(root.arrayFindIndex);
    }

}(this, factory));

function factory(arrayFindIndex)
{
 
    'use strict';

    return typeof Array.prototype.findIndex !== 'function' ? arrayFindIndex : function(context, predicate, this_arg) {
	return Array.prototype.findIndex.call(context, predicate, this_arg);
    };

}