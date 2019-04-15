
// When document loads
$(document).ready(function () {
    var timesclick = 1;

    // btnChangeSpan
    $('#btnChangeSpan').click(function () {
        $('#spnOne').text("This Text for the Span");
    });

    // btnAppendToSpan
    $('#btnAppendToSpan').click(function () {
        $('#spnOne').append("==Text at the back");
    });

    // btnPrependToSpan
    $('#btnPrependToSpan').click(function () {
        $('#spnOne').prepend("Text at the front--");
    });

    // btnBeforeSpan
    $('#btnBeforeSpan').click(function () {
        $('#spnOne').before("Text Before++ ");
    });

    // btnAfterSpan
    $('#btnAfterSpan').click(function () {
        $('#spnOne').after("@@ Text After");
    });

    // btnShowSpan
    $('#btnShowSpan').click(function () {
        alert($('#spnOne').text());
    });

    // btnNumberPs
    $('#btnNumberPs').click(function () {
        var content = $('#divNumbers p');   
       
        var number = 1;
        for (var i = 0; i < content.length; i++) {
            content[i].prepend(number + ". ");
            number++;
        }
    });

    // btnClassPSuccess
    $('#btnClassPSuccess').click(function () {
        $('#divClass p').addClass("success");
    });

    // btnClassPError
    $('#btnClassPError').click(function () {
        var paragraphs = $('#divClass p');
        for (var i = 0; i < paragraphs.length; i++) {
            if (i % 2 === 0) {
                paragraphs[i].className = "error";
            }
        }
    });

    // btnClassPWarning
    $('#btnClassPWarning').click(function () {
        var paragraphs = $('#divClass p');
        paragraphs.removeClass(paragraphs.className);
        paragraphs.addClass("warning");
    });

    // btnAddLastnames
    $('#btnAddLastnames').click(function () {
        var span = $('.bff');
        var strongElement = document.createElement("strong");
        strongElement.innerText = "Flintstone ";
        span[0].prepend(strongElement);
        var emElement = document.createElement("em");
        emElement.innerText = "Rubble ";
        span[0].append(emElement);
        var delElement = document.createElement("del");
        delElement.innerText = "the Dinosaur";
        var sibling = span[0].nextElementSibling;
        sibling.append(delElement);

    });

    // btnRemoveLarry
    $('#btnRemoveLarry').click(function () {
        $('.first').remove();
    })

    // btnClearCulry
    $('#btnClearCurly').click(function () {
        $('.second').text("");
    });

    // btnRemoveMoeLastName
    $('#btnRemoveMoeLastName').click(function () {
        $('.third span:last').text("");
    });

    // btnRemoveShempLastName
    $('#btnRemoveShemplastName').click(function () {
        $('.third').siblings().children().last().text("");
    });

    // btnChangeText
    $('#btnChangeText').click(function () {
        $('#spnTwo').parent().next().children().eq(1).text("I was Changed");                        
    });

    // btnTogglePs
    $('#btnTogglePs').click(function () {
        if (timesclick === 1) {
            $('p').hide();
            timesclick++;
            $('#btnTogglePs').text("Show All Ps");
        } else {
            $('p').show();
            timesclick = 1;
            $('#btnTogglePs').text("Hide All Ps");
        } 
    });
});