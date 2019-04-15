
var storePeople = [];
var hide = false;
var ID;
var Save = false;
$(document).ready(function () {

    // Check what site it is
    if (document.title == "View Local Storage") {
        hide = true;
    }

    // Check if there is username in storage
    if (localStorage.getItem("UserName") != null) {
        $("#UserName").val(localStorage.getItem("UserName"));
        $("#RememberName").attr("checked", "checked");
    }

    if (localStorage.getItem("People") != null) {

        var dataFromStorage = JSON.parse(localStorage.getItem("People"))

        // Get People in storage
        if (dataFromStorage != null) {
            for (var i = 0; i < dataFromStorage.length; i++) {
                storePeople.push(dataFromStorage[i])
            }
        }
        AddPeople(JSON.parse(localStorage.getItem("People")));
    }

    function AddPeople(people) {
        for (var i = 0; i < people.length; i++) {
            var Person = JSON.parse(people[i]);
            var liPerson = $("<li>").addClass("Group" + Person.Group);
            var nspan = $("<span>").text(Person.Name).addClass("Name");
            var aspan = $("<span>").text("Age: " + Person.Age).addClass("Age");
            var pspan = $("<span>").text(Person.Phone).addClass("Phone");
            var gspan = $("<span>").text(Person.Group).addClass("GroupNumber");
            var btn = $("<button>").text("Edit").click(function (e) {
                // Change Button Text
                Save = true;
                $("#btnAddPerson").text("Save Changes")

                var children = e.target.parentNode.children;
                var TheChild;
                for (var i = 0; i < children.length; i++) {
                    if (children[i].className == "Name")
                        TheChild = children[i];
                }
                // Get Index
                ID = GetIndexOf("Name", TheChild.textContent);
                // Get Object From Array

                // var array = JSON.parse(storePeople);
                var Person = JSON.parse(storePeople[ID]);
                //  var Person = storePeople[ID];
                // Set Information
                $("#Name").val(Person.Name);
                $("#Phone").val(Person.Phone);
                $("#Age").val(Person.Age);
                var grp = "#Radio" + Person.Group;

                $(grp).attr('checked', 'checked');


            });

            if (!hide) {
                liPerson.append(btn);
            }
            liPerson.append(nspan);
            liPerson.append(aspan);
            liPerson.append(pspan);
            liPerson.append(gspan);
            $("#people").append(liPerson);
        }
    }

    function SaveChanges() {
        var Person = JSON.parse(storePeople[ID]);
        Person.Name = $("#Name").val();
        Person.Phone = $("#Phone").val();
        Person.Age = $("#Age").val();
        Person.Group = $("input[name='Group']:checked").val();

        // Change Text Back
        $("#btnAddPerson").text("Add Person").click(AddNewPerson);


    }

    $("#btnLogin").click(function () {
        // get text from username and password
        var username = $("#UserName").val();
        var password = $("#Password").val();

        // validate username and password
        if (username === "weaver" && password === "tester") {
            alert("Login Successful");
            // check checkbox
            var state = $("#RememberName").prop("checked");

            if (state == true) {
                // Add UserName to Storage
                localStorage.setItem("UserName", username);
            } else {
                localStorage.removeItem("UserName");
            }
        } else {
            alert("Login Failed");
        }

        // Reload Page
        location.reload();

    });


    $("#btnForgetMe").click(function () {
        // Clear UserName from storage
        localStorage.removeItem("UserName");
    })

    $("#btnAddPerson").click(AddNewPerson)

    function AddNewPerson() {
        if (Save) {
            var Person = JSON.parse(storePeople[ID]);
            Person.Name = $("#Name").val();
            Person.Phone = $("#Phone").val();
            Person.Age = $("#Age").val();
            Person.Group = $("input[name='Group']:checked").val();
            storePeople[ID] = JSON.stringify(Person);
            // Upload new Informatin to storage
            localStorage.setItem("People", JSON.stringify(storePeople));
            // Refresh
            location.reload();
            //$("#btnAddPerson").text("Add Person");
            

        } else {
            // get info
            var name = $("#Name").val();
            var phone = $("#Phone").val();
            var age = $("#Age").val();
            var group = $("input[name='Group']:checked").val();

            var person = {
                "Name": name, "Phone": phone, "Age": age, "Group": group
            };

            // Add Next Person
            storePeople.push(JSON.stringify(person));
            // add to storage
            localStorage.setItem("People", JSON.stringify(storePeople));
            // create li for ul
            var liPerson = $("<li>").addClass("Group" + group);
            var nspan = $("<span>").text(name).addClass("Name");
            var aspan = $("<span>").text("Age: " + age).addClass("Age");
            var pspan = $("<span>").text(phone).addClass("Phone");
            var gspan = $("<span>").text(group).addClass("GroupNumber");
            liPerson.append(nspan);
            liPerson.append(aspan);
            liPerson.append(pspan);
            liPerson.append(gspan);
            $("#people").append(liPerson);
        }
    };

    // Click Even For Clearing Storage of People
    $("#btnClearStorage").click(function () {
        localStorage.removeItem("People");
        location.reload();
    })

    
    // Function to retrieve index from array
    function GetIndexOf(Key, Value) {
        // Go through Array
        for (var i = 0; i < storePeople.length; i++) {
            // Parse JSON 
            // Then Check Key, Value     

            if (JSON.parse(storePeople[i])[Key] == Value) {                
                return i;
            }
        }
    }
    
});