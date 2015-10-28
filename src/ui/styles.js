var FFZ = window.FrankerFaceZ,
	constants = require('../constants');

FFZ.prototype.setup_css = function() {
	document.body.classList.toggle('ffz-flip-dashboard', this.settings.flip_dashboard);

	this.log("Injecting main FrankerFaceZ CSS.");

	var s = this._main_style = document.createElement('link');

	s.id = "ffz-ui-css";
	s.setAttribute('rel', 'stylesheet');
	s.setAttribute('href', constants.SERVER + "script/style.css?_=" + (constants.DEBUG ? Date.now() : FFZ.version_info));
	s.onerror = "this.href = this.href + '_';"

	document.head.appendChild(s);

	if ( window.jQuery && jQuery.noty )
		jQuery.noty.themes.ffzTheme = {
			name: "ffzTheme",
			style: function() {
				this.$bar.removeClass().addClass("noty_bar").addClass("ffz-noty").addClass(this.options.type);
				},
			callback: {
				onShow: function() {},
				onClose: function() {}
			}
		};
}