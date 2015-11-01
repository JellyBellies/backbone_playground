var app = app || {};

$(function(){

	app.init_views = function() {

		app.AppView = Backbone.View.extend({
			el: "#comments_app",
			template: Handlebars.compile($('#main_view').html()),
			render: function(){
				
				this.$el.html(this.template());
				return this;
			}
		});

	}

	app.start = function() {
		app.init_views();

		var appView = new app.AppView();
		appView.render();
	}

	app.start();
});