;(function($){'use strict';$.plugin('swOffcanvasButton',{defaults:{pluginClass:'js--off-canvas-button',contentSelector:'.offcanvas--content',closeButtonSelector:'.close--off-canvas',fullscreen:true},init:function(){var me=this,$el=me.$el,opts=me.opts;me.applyDataAttributes();$el.addClass(opts.pluginClass);$el.swOffcanvasMenu({'direction':'fromRight','offCanvasSelector':$el.find(opts.contentSelector),'fullscreen':opts.fullscreen,'closeButtonSelector':opts.closeButtonSelector});},destroy:function(){var me=this,$el=me.$el,plugin=$el.data('plugin_swOffcanvasMenu');if(plugin){plugin.destroy();}
$el.removeClass(me.opts.pluginClass);me._destroy();}});}(jQuery));