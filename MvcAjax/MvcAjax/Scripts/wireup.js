(function ($, ajax, model, undefined) {
    'use strict';

    var employees = [
        new model.Employee(1, "Awesome Employee 1"),
        new model.Employee(2, "Awesome Employee 2"),
        new model.Employee(3, "Awesome Employee 3"),
        new model.Employee(4, "Awesome Employee 4"),
        new model.Employee(5, "Awesome Employee 5")
    ];

    $('#sendEmployee').click(function () {
        ajax.processEmployee(employees[0]);
    });

    $('#sendArrayButton').click(function () {
        var employeeDtoArray = [];
        for (var index in employees) {
            employeeDtoArray.push(employees[index].toDto());
        }
        ajax.sendArray(employeeDtoArray);
    });

    $('#sendCommandButton').click(function () {
        var command = new model.Crud();
        command.add(employees[0].toDto());
        command.add(employees[1].toDto());
        command.remove(employees[2].toDto());
        command.remove(employees[3].toDto());
        command.update(employees[4].toDto());
        ajax.sendCommand(command);
    });

}).call(this, this.$, this.ajaxOperations, this.model);