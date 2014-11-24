import Ember from "ember";

export default Ember.Controller.extend({
	value: 15,
	minValue: 0,
	maxValue: 100,

	circleStyle: function () {
		return "width:" + this.get('value') + "px; height: " + this.get('value') + "px;";
	}.property('value')
});