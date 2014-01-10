(function ($, ajax, model, undefined) {
    'use strict';

    var employees = [
        new model.Employee(1, "Awesome Employee 1"),
        new model.Employee(2, "Awesome Employee 2"),
        new model.Employee(3, "Awesome Employee 3"),
        new model.Employee(4, "Awesome Employee 4"),
        new model.Employee(5, "Awesome Employee 5")
    ];

    $('#sendArrayButton').click(function () {
        ajax.sendArray(employees);
    });

    $('#sendCommandButton').click(function () {
        var command = new model.Crud();
        command.add(employees[0]);
        command.add(employees[1]);
        command.remove(employees[2]);
        command.remove(employees[3]);
        command.update(employees[4]);
        ajax.sendCommand(command);
    });

}).call(this, this.$, this.ajaxOperations, this.model);