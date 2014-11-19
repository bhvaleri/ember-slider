import Ember from "ember";

export default Ember.Component.extend({
	value: null,
	inputIsActive: false,

	actions: {
		toggleInput: function() { this.toggleProperty('inputIsActive');}
	}
});