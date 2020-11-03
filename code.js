$(document).ready(function () {

    $("form").submit(userInput);

    function userInput(event){
        event.preventDefault();

        // ask jquery for selected rank
        var selectedButton = $("input[name=rank]:checked");

        // apply value
        var selectedRank = selectedButton.data("rank")

        // abbreviate rank
        if (selectedRank === "General")
        {
            selectedRank = "Gen.";
        }
        else if (selectedRank === "Colonel")
        {
            selectedRank = "Col.";
        }
        else
        {
            selectedRank = "Pvt.";
        }

        // ask jquery for first name
        var firstName = $("#firstName").val();

        // ask jquery for last name
        var lastName = $("#lastName").val();

        // concatenate rank, first name, last name
        var fullName = selectedRank + " " + firstName + " " + lastName;

        $("#userOutput").text(fullName);

        $(".output").show();
    }

})