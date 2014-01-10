(function ($, undefined) {
    'use strict';

    function Employee(id, name) {
        this.Id = id;
        this.Name = name;
    }

    function CrudCommand(){
        this.ToAdd = [];
        this.ToRemove = [];
        this.ToUpdate = [];

        this.add = function(employee){
            this.ToAdd.push(employee);
        }
        this.remove = function(employee){
            this.ToRemove.push(employee);
        }
        this.update = function(employee){
            this.ToUpdate.push(employee);
        }
    }

    function AjaxOperations() {

        var mapArrayEndPoint = 'Home/MapArray',
            crudEndPoint = 'Home/ProcessEmployees';

        function doPost(endpoint, payload) {
            $.ajax(endpoint, {
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify(payload),
                dataType: 'json',
                processData: false,
                success: function (result) {
                    console.log(result);
                }
            });
        }

        this.sendArray = function (arr) {
            doPost(mapArrayEndPoint, arr);
        };
        this.sendCommand = function (crudCommand) {
            doPost(crudEndPoint, crudCommand);
        };
    }

    this.ajaxOperations = new AjaxOperations();
    this.model = {
        Employee: Employee,
        Crud: CrudCommand
    };

}).call(this, this.$);