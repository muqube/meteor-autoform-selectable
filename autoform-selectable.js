// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See meteor-autoform-selectable-tests.js for an example of importing.
export const name = 'muqube:autoform-selectable';

//import AutoForm from 'aldeed:autoform';

AutoForm.addInputType("selectable", {
    template: "afSelectable",
    valueOut: function() {
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
        var data = Template.currentData();
        var atts = data.atts;
        atts["data-multiple"] = data.atts["multiple"];
        atts["data-schema-key"] = data.atts["data-schema-key"];

        return atts;
    },
    isOptionSelected (option) {
        const value = Template.currentData().value;
        let isSelected = false;

        if (Array.isArray(value)) {
            isSelected = value.indexOf(option) != -1;
        } else {
            isSelected = option === value;
        }

        return (isSelected)? "selected" : "" ;
    },
    options() {
        var data = Template.currentData();
        return data.selectOptions;
    }
});

Template.afSelectable.events({
    'click .selectable-option'(e, t) {
        const target = $(e.target),
            isMultiple = t && t.data && t.data.atts && t.data.atts.multiple,
            isSelected = target.hasClass('selected'),
            numSelected = t.findAll('.selected.selectable-option').length,
            min = t.data.atts.min || Number.MIN_SAFE_INTEGER,
            max = t.data.atts.max || Number.MAX_SAFE_INTEGER;
        
        if (isMultiple){ 
            if ( ((min < numSelected) && isSelected) || ((numSelected < max) && !isSelected) ) {
                target.toggleClass('selected');
            }
        } else {
            target.toggleClass('selected');
            target.siblings().removeClass('selected');
        }
    }
});