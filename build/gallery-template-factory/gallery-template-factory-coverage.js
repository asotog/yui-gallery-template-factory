if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/gallery-template-factory/gallery-template-factory.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-template-factory/gallery-template-factory.js",
    code: []
};
_yuitest_coverage["build/gallery-template-factory/gallery-template-factory.js"].code=["YUI.add('gallery-template-factory', function (Y, NAME) {","","Y.TemplateRequestor = Y.Base.create('template-requestor', Y.Base, [], {","","    initializer: function () {},","","    /**","     * Retrieves the template by id","     *","     * @param String template id is the template filename without the file extension,","     *             e.g : file -> profile-info.html, id -> profile-info","     * @return String","     */","    getTemplate: function (templateId) {","        if (Y.TemplateFactory.TEMPLATES[templateId]) {","            return Y.TemplateFactory.TEMPLATES[templateId];","        }","        return this.requestTemplate(templateId);","    },","","    /**","     * Requests the template directly via io like a normal ajax request without verifying if it was already used and stored","     *","     * @param String template id is the template filename without the file extension,","     *             e.g : file -> profile-info.html, id -> profile-info","     * @return String","     */","    requestTemplate: function (templateId) {","        var response = Y.io(this._getTemplatePath(templateId), {","            sync: true","        });","        Y.TemplateFactory.TEMPLATES[templateId] = response.responseText;","        return Y.TemplateFactory.TEMPLATES[templateId];","    },","","    /**","     * Gets the template file path","     *","     * @param String template id is the template filename without the file extension,","     *             e.g : file -> profile-info.html, id -> profile-info","     * @return String","     */","    _getTemplatePath: function (templateId) {","        return this.get('path') + templateId + this.get('suffix');","    },","","    destructor: function () {","","    }","}, {","    ATTRS: {","        path: {","            value: ''","        },","","        suffix: {","            value: '.html'","        }","    }","});","","","Y.TemplateFactory = {","","    /**","     * Instantiates template requestor","     *","     * @param Object Configuration","     * @return Object Template requestor","     */","    getRequestor: function (configuration) {","        return new Y.TemplateRequestor(configuration);","    }","};","","/**"," * Namespace to store in an associative array the templates already loaded to avoid"," * multiple http calls to the same template"," *"," * @type Object"," */","Y.namespace('TemplateFactory.TEMPLATES');","","}, '@VERSION@', {\"requires\": [\"yui-base\", \"base-build\", \"io-base\"]});"];
_yuitest_coverage["build/gallery-template-factory/gallery-template-factory.js"].lines = {"1":0,"3":0,"15":0,"16":0,"18":0,"29":0,"32":0,"33":0,"44":0,"63":0,"72":0,"82":0};
_yuitest_coverage["build/gallery-template-factory/gallery-template-factory.js"].functions = {"getTemplate:14":0,"requestTemplate:28":0,"_getTemplatePath:43":0,"getRequestor:71":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-template-factory/gallery-template-factory.js"].coveredLines = 12;
_yuitest_coverage["build/gallery-template-factory/gallery-template-factory.js"].coveredFunctions = 5;
_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 1);
YUI.add('gallery-template-factory', function (Y, NAME) {

_yuitest_coverfunc("build/gallery-template-factory/gallery-template-factory.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 3);
Y.TemplateRequestor = Y.Base.create('template-requestor', Y.Base, [], {

    initializer: function () {},

    /**
     * Retrieves the template by id
     *
     * @param String template id is the template filename without the file extension,
     *             e.g : file -> profile-info.html, id -> profile-info
     * @return String
     */
    getTemplate: function (templateId) {
        _yuitest_coverfunc("build/gallery-template-factory/gallery-template-factory.js", "getTemplate", 14);
_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 15);
if (Y.TemplateFactory.TEMPLATES[templateId]) {
            _yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 16);
return Y.TemplateFactory.TEMPLATES[templateId];
        }
        _yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 18);
return this.requestTemplate(templateId);
    },

    /**
     * Requests the template directly via io like a normal ajax request without verifying if it was already used and stored
     *
     * @param String template id is the template filename without the file extension,
     *             e.g : file -> profile-info.html, id -> profile-info
     * @return String
     */
    requestTemplate: function (templateId) {
        _yuitest_coverfunc("build/gallery-template-factory/gallery-template-factory.js", "requestTemplate", 28);
_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 29);
var response = Y.io(this._getTemplatePath(templateId), {
            sync: true
        });
        _yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 32);
Y.TemplateFactory.TEMPLATES[templateId] = response.responseText;
        _yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 33);
return Y.TemplateFactory.TEMPLATES[templateId];
    },

    /**
     * Gets the template file path
     *
     * @param String template id is the template filename without the file extension,
     *             e.g : file -> profile-info.html, id -> profile-info
     * @return String
     */
    _getTemplatePath: function (templateId) {
        _yuitest_coverfunc("build/gallery-template-factory/gallery-template-factory.js", "_getTemplatePath", 43);
_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 44);
return this.get('path') + templateId + this.get('suffix');
    },

    destructor: function () {

    }
}, {
    ATTRS: {
        path: {
            value: ''
        },

        suffix: {
            value: '.html'
        }
    }
});


_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 63);
Y.TemplateFactory = {

    /**
     * Instantiates template requestor
     *
     * @param Object Configuration
     * @return Object Template requestor
     */
    getRequestor: function (configuration) {
        _yuitest_coverfunc("build/gallery-template-factory/gallery-template-factory.js", "getRequestor", 71);
_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 72);
return new Y.TemplateRequestor(configuration);
    }
};

/**
 * Namespace to store in an associative array the templates already loaded to avoid
 * multiple http calls to the same template
 *
 * @type Object
 */
_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 82);
Y.namespace('TemplateFactory.TEMPLATES');

}, '@VERSION@', {"requires": ["yui-base", "base-build", "io-base"]});
