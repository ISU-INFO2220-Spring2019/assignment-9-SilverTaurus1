

$(document).ready(function () {
    $("#btnSearch").click(function () {
        $.ajax({
            url: "data/books.json",
            success: function (data) {
                var text = $("#txtSearch").val();
                ClearTable();
                // If there is text
                if (text.length > 0) {
                    var dataFound = false;
                    // Search for text in data
                    $.each(data, function (ndx, obj) {
                        // Look through data
                        if (obj.title.indexOf(text) >= 0) { AddData(obj); dataFound = true; }
                        else if (obj.author.firstname.indexOf(text) >= 0) { AddData(obj); dataFound = true; }
                        else if (obj.author.middlename.indexOf(text) >= 0) { AddData(obj); dataFound = true; }
                        else if (obj.author.lastname.indexOf(text) >= 0) { AddData(obj); dataFound = true; }
                        else if (obj.isbn.indexOf(text) >= 0) { AddData(obj); dataFound = true; }
                        else { for (var i = 0; i < obj.tags.length; i++) { if (obj.tags[i].indexOf(text) >= 0) { AddData(obj); dataFound = true; } } }                        
                    })
                    if (!dataFound) { alert("Data not found");}
                } else {
                    $.each(data, function (ndx, obj) {
                        AddData(obj);
                    })
                }
                
            }
        })
    })

    $("#txtPerson").on("input propertychange paste", function () {
        $.ajax({
            url: "data/people.json",
            success: function (data) {
                // Clear Previous Rows
                ClearRows();
                // Look for text
                var text = $("#txtPerson").val();
                if (text.length > 0) {
                    // Get People
                    $.each(data, function (ndx, obj) {
                        if (obj.name.indexOf(text) >= 0) { AddPeople(obj); }
                        if (obj.phone.indexOf(text) >= 0) { AddPeople(obj); }
                    })
                } else {
                    ClearRows();
                }
            }
        })
    })
    function ClearTable(){
        var table = $("#BookTable").children().children();
        for (var i = 1; i < table.length; i++) {
            table[i].remove();
        }
                
    }
    function ClearRows() {
        var lis = $("#ListOfPeople").children()
        for (var i = 1; i < lis.length; i++) {
            lis[i].remove();
        }
    }

    function AddData(obj) {
        // Add Rows to table        
        var row = $("<tr>");
        row.append($("<td>").text(obj.title));
        row.append($("<td>").text(obj.isbn));
        row.append($("<td>").text(obj.author.firstname + " " + obj.author.middlename + " " + obj.author.lastname));
        row.append($("<td>").text(obj.tags));                
        $("#BookTable").append(row);
    }

    function AddPeople(obj) {
        // Add People to list
        var li = $("<li>");
        var nspan = $("<span>").text(obj.name).addClass("Name");
        var aspan = $("<span>").text("Age: " + obj.age).addClass("Age");
        var pspan = $("<span>").text( obj.phone).addClass("Phone");
        var gspan = $("<span>").text(obj.group).addClass("Group");        
        li.append(nspan);
        li.append(aspan);
        li.append(pspan);
        li.append(gspan);
        if (obj.group === 1) { li.addClass("Group1"); }
        else if (obj.group === 2) { li.addClass("Group2"); }
        else if (obj.group === 3) { li.addClass("Group3");}
        $("#ListOfPeople").append(li);
    }

})