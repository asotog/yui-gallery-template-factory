YUI.add('gallery-template-factory', function (Y, NAME) {

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
        if (Y.TemplateFactory.TEMPLATES[templateId]) {
            return Y.TemplateFactory.TEMPLATES[templateId];
        }
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
        var response = Y.io(this._getTemplatePath(templateId), {
            sync: true
        });
        Y.TemplateFactory.TEMPLATES[templateId] = response.responseText;
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


Y.TemplateFactory = {

    /**
     * Instantiates template requestor
     *
     * @param Object Configuration
     * @return Object Template requestor
     */
    getRequestor: function (configuration) {
        return new Y.TemplateRequestor(configuration);
    }
};

/**
 * Namespace to store in an associative array the templates already loaded to avoid
 * multiple http calls to the same template
 *
 * @type Object
 */
Y.namespace('TemplateFactory.TEMPLATES');

}, '@VERSION@', {"requires": ["yui-base", "base-build", "io-base"]});
