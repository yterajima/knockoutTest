var MarkdownViewModel = function () {
    "use strict";

    this.textData = ko.observable('edit markdown');

    this.displayHtml = ko.computed(function () {
        return markdown.toHTML(this.textData());
    }, this);
};

ko.applyBindings(new MarkdownViewModel());
