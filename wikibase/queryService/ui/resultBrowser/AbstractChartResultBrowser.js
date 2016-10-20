var wikibase = wikibase || {};
wikibase.queryService = wikibase.queryService || {};
wikibase.queryService.ui = wikibase.queryService.ui || {};
wikibase.queryService.ui.resultBrowser = wikibase.queryService.ui.resultBrowser || {};
window.mediaWiki = window.mediaWiki || {};

wikibase.queryService.ui.resultBrowser.AbstractChartResultBrowser = ( function( $, window ) {
	'use strict';

	/**
	 * An abstract result browser for charts
	 *
	 * @class wikibase.queryService.ui.resultBrowser.TreeResultBrowser
	 * @license GNU GPL v2+
	 *
	 * @author Jonas Kress
	 *
	 * @constructor
	 */
	function SELF() {
	}

	SELF.prototype = new wikibase.queryService.ui.resultBrowser.AbstractResultBrowser();

	/**
	 * Returns all columns that contain numbers
	 *
	 * @private
	 * @return {String[]}
	 */
	SELF.prototype._getLabelColumns = function() {
		var self = this,
			row = self._getRows()[0];

		return self._getColumns().filter( function( column ) {
			return self._getFormatter().isLabel( row[column] );
		} );
	};

	/**
	 * Returns all columns that contain numbers
	 * @private
	 * @return {Number[]}
	 **/
	SELF.prototype._getNumberColumns = function() {
		var self = this,
			row = self._getRows()[0];

		return self._getColumns().filter( function( column ) {
			return self._getFormatter().isNumber( row[column] );
		} );
	};

	/**
	 * @private
	 * @return {String[]}
	 **/
	SELF.prototype._getColumns = function() {
		return this._result.head.vars;
	};

	/**
	 * @private
	 * @return {Object[]}
	 **/
	SELF.prototype._getRows = function() {
		return this._result.results.bindings;
	};

	return SELF;
}( jQuery, window ) );
