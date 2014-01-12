(function ($, undefined) {
    'use strict';

    function Employee(id, name) {
        var self = this,
            firstName = name.substr(0, name.indexOf(' ')),
            lastName = $.trim(name.substr(name.indexOf(' ') + 1)),
            detailsUrl = 'https://www.google.com/#q=' + name + '&safe=off';

        this.Id = id;
        this.FullName = name;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.DetailsUrl = detailsUrl;
        this.toDto = function () {
            return {
                Id: self.Id,
                Name: self.FullName
            };
        }
    }
    Employee.fromDto = function (dto) {
        return new Employee(dto.Id, dto.Name);
    }

    function CrudCommand() {
        this.ToAdd = [];
        this.ToRemove = [];
        this.ToUpdate = [];

        this.add = function (employee) {
            this.ToAdd.push(employee);
        }
        this.remove = function (employee) {
            this.ToRemove.push(employee);
        }
        this.update = function (employee) {
            this.ToUpdate.push(employee);
        }
    }

    function AjaxOperations() {

        var mapArrayEndPoint = 'Home/MapArray',
            crudEndPoint = 'Home/ProcessEmployees',
            processEmployeeEndpoint = 'Home/ProcessEmployee';

        function doPost(endpoint, payload, successCallback) {
            $.ajax(endpoint, {
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify(payload),
                dataType: 'json',
                processData: false,
                success: successCallback
            });
        }

        this.processEmployee = function (employee, successCallback) {
            doPost(processEmployeeEndpoint, employee.toDto(), successCallback || console.log);
        };
        this.sendArray = function (arr, successCallback) {
            doPost(mapArrayEndPoint, arr, successCallback || console.log);
        };
        this.sendCommand = function (crudCommand, successCallback) {
            doPost(crudEndPoint, crudCommand, successCallback || console.log);
        };
    }

    this.ajaxOperations = new AjaxOperations();
    this.model = {
        Employee: Employee,
        Crud: CrudCommand
    };

}).call(this, this.$);