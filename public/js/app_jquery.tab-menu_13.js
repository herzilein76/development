;(function($){$.plugin('swTabMenu',{defaults:{'pluginClass':'js--tab-menu','tabContainerSelector':'.tab--navigation','tabSelector':'.tab--link','containerListSelector':'.tab--container-list','containerSelector':'.tab--container','contentSelector':'.tab--content','hasContentClass':'has--content','activeTabClass':'is--active','activeContainerClass':'is--active','startIndex':-1,'scrollable':false},init:function(){var me=this,opts=me.opts,$el=me.$el,$container,$tab;me.applyDataAttributes();$el.addClass(opts.pluginClass);me.$tabContainer=$el.find(opts.tabContainerSelector);me.$containerList=$el.find(opts.containerListSelector);me.$tabs=me.$tabContainer.find(opts.tabSelector);me.$container=me.$containerList.find(opts.containerSelector);me.$container.each(function(i,el){$container=$(el);$tab=$(me.$tabs.get(i));if($container.find(opts.contentSelector).html().trim().length){$container.addClass(opts.hasContentClass);$tab.addClass(opts.hasContentClass);if(opts.startIndex===-1){$tab.addClass(opts.activeTabClass);opts.startIndex=i;}}});if(me.opts.scrollable){me.$el.swMenuScroller({'listSelector':me.$tabContainer});}
opts.startIndex=Math.max(opts.startIndex,0);me._index=null;me.registerEventListeners();me.changeTab(opts.startIndex);},registerEventListeners:function(){var me=this;me.$tabs.each(function(i,el){me._on(el,'click touchstart',$.proxy(me.changeTab,me,i));});$.publish('plugin/swTabMenu/onRegisterEvents',[me]);},changeTab:function(index,event){var me=this,opts=me.opts,activeTabClass=opts.activeTabClass,activeContainerClass=opts.activeContainerClass,$tab,tabId,dataUrl,$container;if(event){event.preventDefault();}
if(index===me._index){return;}
me._index=index;$tab=$(me.$tabs.get(index));$container=$(me.$container.get(index));me.$tabContainer.find('.'+activeTabClass).removeClass(activeTabClass);$tab.addClass(activeTabClass);me.$containerList.find('.'+activeContainerClass).removeClass(activeContainerClass);$container.addClass(activeContainerClass);dataUrl=$tab.attr('data-url');tabId=$container.attr('data-tab-id');if($tab.attr('data-mode')==='remote'&&dataUrl){$container.load(dataUrl);}
if(tabId!==undefined){$.publish('onShowContent-'+tabId,[me,index]);}
$.publish('plugin/swTabMenu/onChangeTab',[me,index]);},destroy:function(){var me=this,menuScroller=me.$el.data('plugin_swMenuScroller');if(menuScroller!==undefined){menuScroller.destroy();}
me.$el.removeClass(me.opts.pluginClass);me._destroy();}});})(jQuery);