/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, bitwise: true, regexp: true, newcap: true, immed: true,indent:2 */
/*global $:true, chrome:true, jQuery:true */

$("head").append("<style type=\"text/css\" charset=\"utf-8\">body{visibility:hidden;}");
$(document).ready(function () {
	var sponsored = $(this).not('.egoOrganicColumn');
	$(".ego_section", sponsored).css('display', 'none');
	$("body").on('mouseover', '.ego_column', function () {
		var sponsored = $(this).not('.egoOrganicColumn');
		$(".ego_section", sponsored).css('display', 'none');
	});
	$("head").append("<style type=\"text/css\" charset=\"utf-8\">.ego_column>.ego_section{display:none;}.egoOrganicColumn>.ego_section{display:block}");
$("body").css('visiblity', 'visible');
});
