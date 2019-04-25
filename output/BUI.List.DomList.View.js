Ext.data.JsonP.BUI_List_DomList_View({"tagname":"class","name":"BUI.List.DomList.View","autodetected":{},"files":[{"filename":"domlist.js","href":"domlist.html#BUI-List-DomList-View"}],"private":true,"members":[{"name":"addItem","tagname":"method","owner":"BUI.List.DomList.View","id":"method-addItem","meta":{}},{"name":"clearControl","tagname":"method","owner":"BUI.List.DomList.View","id":"method-clearControl","meta":{"protected":true}},{"name":"findElement","tagname":"method","owner":"BUI.List.DomList.View","id":"method-findElement","meta":{}},{"name":"getAllElements","tagname":"method","owner":"BUI.List.DomList.View","id":"method-getAllElements","meta":{}},{"name":"getElementsByStatus","tagname":"method","owner":"BUI.List.DomList.View","id":"method-getElementsByStatus","meta":{}},{"name":"getFirstElementByStatus","tagname":"method","owner":"BUI.List.DomList.View","id":"method-getFirstElementByStatus","meta":{}},{"name":"getItemByElement","tagname":"method","owner":"BUI.List.DomList.View","id":"method-getItemByElement","meta":{}},{"name":"getItemContainer","tagname":"method","owner":"BUI.List.DomList.View","id":"method-getItemContainer","meta":{"protected":true}},{"name":"getItemStatusCls","tagname":"method","owner":"BUI.List.DomList.View","id":"method-getItemStatusCls","meta":{}},{"name":"getItemTpl","tagname":"method","owner":"BUI.List.DomList.View","id":"method-getItemTpl","meta":{"protected":true}},{"name":"getItems","tagname":"method","owner":"BUI.List.DomList.View","id":"method-getItems","meta":{}},{"name":"getSelectedElements","tagname":"method","owner":"BUI.List.DomList.View","id":"method-getSelectedElements","meta":{}},{"name":"hasStatus","tagname":"method","owner":"BUI.List.DomList.View","id":"method-hasStatus","meta":{}},{"name":"isElementSelected","tagname":"method","owner":"BUI.List.DomList.View","id":"method-isElementSelected","meta":{}},{"name":"setItemSelected","tagname":"method","owner":"BUI.List.DomList.View","id":"method-setItemSelected","meta":{}},{"name":"setItemStatusCls","tagname":"method","owner":"BUI.List.DomList.View","id":"method-setItemStatusCls","meta":{"protected":true}}],"alternateClassNames":[],"aliases":{},"id":"class-BUI.List.DomList.View","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/domlist.html#BUI-List-DomList-View' target='_blank'>domlist.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>选项是DOM的列表的视图类</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addItem' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-addItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-addItem' class='name expandable'>addItem</a>( <span class='pre'>item, index</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>添加选项 ...</div><div class='long'><p>添加选项</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>选项值</p>\n</div></li><li><span class='pre'>index</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>索引</p>\n</div></li></ul></div></div></div><div id='method-clearControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-clearControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-clearControl' class='name expandable'>clearControl</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>清除者列表项的DOM ...</div><div class='long'><p>清除者列表项的DOM</p>\n</div></div></div><div id='method-findElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-findElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-findElement' class='name expandable'>findElement</a>( <span class='pre'>item</span> ) : HTMLElement<span class=\"signature\"></span></div><div class='description'><div class='short'>查找指定的项的DOM结构 ...</div><div class='long'><p>查找指定的项的DOM结构</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'><p>element</p>\n</div></li></ul></div></div></div><div id='method-getAllElements' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-getAllElements' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-getAllElements' class='name expandable'>getAllElements</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取所有列表项的DOM结构 ...</div><div class='long'><p>获取所有列表项的DOM结构</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>DOM列表</p>\n</div></li></ul></div></div></div><div id='method-getElementsByStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-getElementsByStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-getElementsByStatus' class='name expandable'>getElementsByStatus</a>( <span class='pre'>status</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>根据状态获取DOM ...</div><div class='long'><p>根据状态获取DOM</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>status</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>DOM数组</p>\n</div></li></ul></div></div></div><div id='method-getFirstElementByStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-getFirstElementByStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-getFirstElementByStatus' class='name expandable'>getFirstElementByStatus</a>( <span class='pre'>name</span> ) : HTMLElement<span class=\"signature\"></span></div><div class='description'><div class='short'>根据状态获取第一个DOM 节点 ...</div><div class='long'><p>根据状态获取第一个DOM 节点</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>状态名称</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'><p>Dom 节点</p>\n</div></li></ul></div></div></div><div id='method-getItemByElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-getItemByElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-getItemByElement' class='name expandable'>getItemByElement</a>( <span class='pre'>element</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取DOM结构中的数据 ...</div><div class='long'><p>获取DOM结构中的数据</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : HTMLElement<div class='sub-desc'><p>DOM 结构</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>该项对应的值</p>\n</div></li></ul></div></div></div><div id='method-getItemContainer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-getItemContainer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-getItemContainer' class='name expandable'>getItemContainer</a>( <span class='pre'></span> ) : jQuery<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取列表项的容器 ...</div><div class='long'><p>获取列表项的容器</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>jQuery</span><div class='sub-desc'><p>列表项容器</p>\n</div></li></ul></div></div></div><div id='method-getItemStatusCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-getItemStatusCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-getItemStatusCls' class='name expandable'>getItemStatusCls</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取列表项对应状态的样式 ...</div><div class='long'><p>获取列表项对应状态的样式</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>状态名称</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>状态的样式</p>\n</div></li></ul></div></div></div><div id='method-getItemTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-getItemTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-getItemTpl' class='name expandable'>getItemTpl</a>( <span class='pre'>item, index</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取记录的模板,itemTpl 和 数据item 合并产生的模板 ...</div><div class='long'><p>获取记录的模板,itemTpl 和 数据item 合并产生的模板</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>index</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-getItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-getItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-getItems' class='name expandable'>getItems</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取所有的记录 ...</div><div class='long'><p>获取所有的记录</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>记录集合</p>\n</div></li></ul></div></div></div><div id='method-getSelectedElements' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-getSelectedElements' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-getSelectedElements' class='name expandable'>getSelectedElements</a>( <span class='pre'>css</span> ) : jQuery<span class=\"signature\"></span></div><div class='description'><div class='short'>通过样式查找DOM元素 ...</div><div class='long'><p>通过样式查找DOM元素</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>css</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>样式</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>jQuery</span><div class='sub-desc'><p>DOM元素的数组对象</p>\n</div></li></ul></div></div></div><div id='method-hasStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-hasStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-hasStatus' class='name expandable'>hasStatus</a>( <span class='pre'>name, element</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否有某个状态 ...</div><div class='long'><p>是否有某个状态</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : *<div class='sub-desc'><p>状态名称</p>\n</div></li><li><span class='pre'>element</span> : HTMLElement<div class='sub-desc'><p>DOM结构</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否具有状态</p>\n</div></li></ul></div></div></div><div id='method-isElementSelected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-isElementSelected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-isElementSelected' class='name expandable'>isElementSelected</a>( <span class='pre'>element</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>列表项是否选中 ...</div><div class='long'><p>列表项是否选中</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : HTMLElement<div class='sub-desc'><p>是否选中</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否选中</p>\n</div></li></ul></div></div></div><div id='method-setItemSelected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-setItemSelected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-setItemSelected' class='name expandable'>setItemSelected</a>( <span class='pre'>item, selected, element</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>设置列表项选中 ...</div><div class='long'><p>设置列表项选中</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : *<div class='sub-desc'><p>记录</p>\n</div></li><li><span class='pre'>selected</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否选中</p>\n</div></li><li><span class='pre'>element</span> : HTMLElement<div class='sub-desc'><p>DOM结构</p>\n</div></li></ul></div></div></div><div id='method-setItemStatusCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.List.DomList.View'>BUI.List.DomList.View</span><br/><a href='source/domlist.html#BUI-List-DomList-View-method-setItemStatusCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.List.DomList.View-method-setItemStatusCls' class='name expandable'>setItemStatusCls</a>( <span class='pre'>name, element, value</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>设置列表项选中 ...</div><div class='long'><p>设置列表项选中</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : *<div class='sub-desc'><p>状态名称</p>\n</div></li><li><span class='pre'>element</span> : HTMLElement<div class='sub-desc'><p>DOM结构</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>设置或取消此状态</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});