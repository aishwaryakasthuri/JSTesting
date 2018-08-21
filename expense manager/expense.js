$(document).ready(function() {
    $name = $('input[name="item-name"'); 
    $amount = $('input[name="amount"');
    $type = $('select[name="type"');
    $date = $('input[name="date"');
  
    var formatDate = function(d) {
      var d = d.split("-"); 
  
      var dt = new Date(d[0], d[1], d[2]); 
  
      var formattedDate = "";
  
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
  
      formattedDate += months[dt.getMonth() - 1]; 
  
      var formattedDay; 
  
      switch (d[2].substring(1)) { 
        case "1":
          formattedDay = parseInt(d[2]) + "st"; 
          break;
        case "2":
          formattedDay = parseInt(d[2]) + "nd"; 
          break;
        case "3":
          formattedDay = parseInt(d[2]) + "rd"; 
          break;
        default:
          formattedDay = parseInt(d[2]) + "th";
      }
      formattedDate += " " + formattedDay;
      return formattedDate;
    };
  
    //Notice the $varname - Now each of these is is a jquery object corresponding to the DOM element and can be used to call the .val() method directly at any time. The way you had it before would only grab the value at the time of the declarations - ie before the values are set.

    $("button").click(function() {
      // Making it always add a icon in the type row
      var type_icon; //Store the html fragment to a variable when needed.
      if ($type.val() == "card") {
        type_icon = "<i class='fa fa-credit-card'></i>";
      } else if ($type.val() == "cash") {
        type_icon = "<i class='fa fa-inr'></i>";
      } 
  
      var form_validated = true;
      //Add your validation tests, have them set form_validated to false if they fail
      //TODO
  
      if (form_validated) {
        //Now we can use our references we made before
        $("table tr:first").after(
          "<tr><td>" +
            type_icon +
            "</td><td>" +
            $name.val() +
            "</td><td>" +
            formatDate($date.val()) +
            '</td><td class="amount">Rs' +
            $amount.val() +
            "</td></tr>"
        );
        $date.val(null);
        $amount.val(null);
        $name.val(null);
        $("#if-empty").remove();
      }
    });
  });
  