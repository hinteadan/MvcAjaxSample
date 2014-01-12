(function ($, ajax, model, JSON, undefined) {
    'use strict';

    var log = new this.Logger($('#log')),
        employees = [
        new model.Employee(1, "Awesome Employee 1"),
        new model.Employee(2, "Awesome Employee 2"),
        new model.Employee(3, "Awesome Employee 3"),
        new model.Employee(4, "Awesome Employee 4"),
        new model.Employee(5, "Awesome Employee 5")
    ];

    $('#sendEmployee').click(function () {
        log.message('Send employee to server. Payload: ' + JSON.stringify(employees[0].toDto()));
        ajax.processEmployee(employees[0].toDto(), function (result) {
            log.message('Response from server: ' + JSON.stringify(result));
        });
    });

    $('#sendArrayButton').click(function () {
        var employeeDtoArray = [];
        for (var index in employees) {
            employeeDtoArray.push(employees[index].toDto());
        }
        log.message('Send array to server. Payload: ' + JSON.stringify(employeeDtoArray));
        ajax.sendArray(employeeDtoArray, function (result) {
            log.message('Response from server: ' + JSON.stringify(result));
        });
    });

    $('#sendCommandButton').click(function () {
        var command = new model.Crud();
        command.add(employees[0].toDto());
        command.add(employees[1].toDto());
        command.remove(employees[2].toDto());
        command.remove(employees[3].toDto());
        command.update(employees[4].toDto());
        log.message('Send command to server. Payload: ' + JSON.stringify(command));
        ajax.sendCommand(command, function (result) {
            log.message('Response from server: ' + JSON.stringify(result));
        });
    });

}).call(this, this.$, this.ajaxOperations, this.model, this.JSON);