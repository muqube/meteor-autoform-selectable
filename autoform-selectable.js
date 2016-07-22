// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See meteor-autoform-selectable-tests.js for an example of importing.
export const name = 'muqube:autoform-selectable';

//import AutoForm from 'aldeed:autoform';

AutoForm.addInputType("selectable", {
    template: "afSelectable",
    valueOut: function(){
        const data = this.data();
        let selection = this.find('.selected.selectable-option');

        if (data.multiple) {
            let values = [];
            selection.each((index, elem) => {
                values.push($(elem).data('value'));
            });
            return values;
        } else {
            return selection.data('value');
        }
    }
});

Template.afSelectable.helpers({
    atts: function () {
        var data = Template.currentData(); // get data reactively
        var atts = data.atts;
        atts["data-multiple"] = data.atts["multiple"];
        atts["data-schema-key"] = data.atts["data-schema-key"];

        return atts;
    },
    isMultipleSelect() {
        var data = Template.currentData(); // get data reactively
    },
    options() {
        var data = Template.currentData(); // get data reactively
        return data.selectOptions;
    }
});

Template.afSelectable.events({
    'click .selectable-option'(e, t) {
        const target = $(e.target);
        const isMultiple = t && t.data && t.data.atts && t.data.atts.multiple;
        target.toggleClass('selected');
        if (!isMultiple) {
            target.siblings().removeClass('selected');
        }
    }
});