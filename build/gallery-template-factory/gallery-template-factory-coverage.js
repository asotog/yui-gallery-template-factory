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
_yuitest_coverage["build/gallery-template-factory/gallery-template-factory.js"].code=["YUI.add('gallery-template-factory', function (Y, NAME) {","","/**"," * Utility to retrieve html templates based on a template id"," *"," * @class TemplateRequestor"," * @extends Base"," * @module gallery-template-factory"," * @constructor"," * @param configuration {Object} Is the configuration object"," */","Y.TemplateRequestor = Y.Base.create('template-requestor', Y.Base, [], {","","    initializer: function () {},","","    /**","     * Retrieves the template by id","     *","     * @method getTemplate","     * @param String template id is the template filename without the file extension,","     *             e.g : file -> profile-info.html, id -> profile-info","     * @return String","     */","    getTemplate: function (templateId) {","        if (Y.TemplateFactory.TEMPLATES[templateId]) {","            return Y.TemplateFactory.TEMPLATES[templateId];","        }","        return this.requestTemplate(templateId);","    },","","    /**","     * Requests the template directly via io like a normal ajax request without verifying if it was already used and stored","     *","     * @method requestTemplate","     * @param String template id is the template filename without the file extension,","     *             e.g : file -> profile-info.html, id -> profile-info","     * @return String","     */","    requestTemplate: function (templateId) {","        var response = Y.io(this._getTemplatePath(templateId), {","            sync: true","        });","        Y.TemplateFactory.TEMPLATES[templateId] = response.responseText;","        return Y.TemplateFactory.TEMPLATES[templateId];","    },","","    _getTemplatePath: function (templateId) {","        return this.get('path') + templateId + this.get('suffix');","    },","","    destructor: function () {","","    }","}, {","    ATTRS: {","        /**","         * Indicates where the templates are stored","         *","         * @attribute path","         * @type String","         */","        path: {","            value: ''","        },","","        /**","         * Templates file suffix or extension","         *","         * @attribute suffix","         * @default '.html'","         * @type String","         */","        suffix: {","            value: '.html'","        }","    }","});","","/**"," * Factory util to retrieve the template requestor object"," *"," * @class TemplateFactory"," * @static"," * @module gallery-template-factory"," */","Y.TemplateFactory = {","","    /**","     * Instantiates template requestor","     *","     * @method getRequestor","     * @param {Object} Configuration","     * @return {TemplateRequestor} Template requestor","     */","    getRequestor: function (configuration) {","        return new Y.TemplateRequestor(configuration);","    }","};","","/**"," * Namespace to store in an associative array the templates already loaded to avoid"," * multiple http calls to the same template"," *"," * @type Object"," */","Y.namespace('TemplateFactory.TEMPLATES');","","}, '@VERSION@', {\"requires\": [\"yui-base\", \"base-build\", \"io-base\"]});"];
_yuitest_coverage["build/gallery-template-factory/gallery-template-factory.js"].lines = {"1":0,"12":0,"25":0,"26":0,"28":0,"40":0,"43":0,"44":0,"48":0,"86":0,"96":0,"106":0};
_yuitest_coverage["build/gallery-template-factory/gallery-template-factory.js"].functions = {"getTemplate:24":0,"requestTemplate:39":0,"_getTemplatePath:47":0,"getRequestor:95":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-template-factory/gallery-template-factory.js"].coveredLines = 12;
_yuitest_coverage["build/gallery-template-factory/gallery-template-factory.js"].coveredFunctions = 5;
_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 1);
YUI.add('gallery-template-factory', function (Y, NAME) {

/**
 * Utility to retrieve html templates based on a template id
 *
 * @class TemplateRequestor
 * @extends Base
 * @module gallery-template-factory
 * @constructor
 * @param configuration {Object} Is the configuration object
 */
_yuitest_coverfunc("build/gallery-template-factory/gallery-template-factory.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 12);
Y.TemplateRequestor = Y.Base.create('template-requestor', Y.Base, [], {

    initializer: function () {},

    /**
     * Retrieves the template by id
     *
     * @method getTemplate
     * @param String template id is the template filename without the file extension,
     *             e.g : file -> profile-info.html, id -> profile-info
     * @return String
     */
    getTemplate: function (templateId) {
        _yuitest_coverfunc("build/gallery-template-factory/gallery-template-factory.js", "getTemplate", 24);
_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 25);
if (Y.TemplateFactory.TEMPLATES[templateId]) {
            _yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 26);
return Y.TemplateFactory.TEMPLATES[templateId];
        }
        _yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 28);
return this.requestTemplate(templateId);
    },

    /**
     * Requests the template directly via io like a normal ajax request without verifying if it was already used and stored
     *
     * @method requestTemplate
     * @param String template id is the template filename without the file extension,
     *             e.g : file -> profile-info.html, id -> profile-info
     * @return String
     */
    requestTemplate: function (templateId) {
        _yuitest_coverfunc("build/gallery-template-factory/gallery-template-factory.js", "requestTemplate", 39);
_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 40);
var response = Y.io(this._getTemplatePath(templateId), {
            sync: true
        });
        _yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 43);
Y.TemplateFactory.TEMPLATES[templateId] = response.responseText;
        _yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 44);
return Y.TemplateFactory.TEMPLATES[templateId];
    },

    _getTemplatePath: function (templateId) {
        _yuitest_coverfunc("build/gallery-template-factory/gallery-template-factory.js", "_getTemplatePath", 47);
_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 48);
return this.get('path') + templateId + this.get('suffix');
    },

    destructor: function () {

    }
}, {
    ATTRS: {
        /**
         * Indicates where the templates are stored
         *
         * @attribute path
         * @type String
         */
        path: {
            value: ''
        },

        /**
         * Templates file suffix or extension
         *
         * @attribute suffix
         * @default '.html'
         * @type String
         */
        suffix: {
            value: '.html'
        }
    }
});

/**
 * Factory util to retrieve the template requestor object
 *
 * @class TemplateFactory
 * @static
 * @module gallery-template-factory
 */
_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 86);
Y.TemplateFactory = {

    /**
     * Instantiates template requestor
     *
     * @method getRequestor
     * @param {Object} Configuration
     * @return {TemplateRequestor} Template requestor
     */
    getRequestor: function (configuration) {
        _yuitest_coverfunc("build/gallery-template-factory/gallery-template-factory.js", "getRequestor", 95);
_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 96);
return new Y.TemplateRequestor(configuration);
    }
};

/**
 * Namespace to store in an associative array the templates already loaded to avoid
 * multiple http calls to the same template
 *
 * @type Object
 */
_yuitest_coverline("build/gallery-template-factory/gallery-template-factory.js", 106);
Y.namespace('TemplateFactory.TEMPLATES');

}, '@VERSION@', {"requires": ["yui-base", "base-build", "io-base"]});
