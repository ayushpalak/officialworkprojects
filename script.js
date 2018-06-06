$(document).ready(function(){
    window.alert("loaded");
    $("#deploybutton").click(function(){
        alert("button clicked");
    $.ajax({url: "http://127.0.0.1:3000/deploy-contract", 
            data: {customer_address: $("#input_customeraddress").val(), insurance_company_address: $("#input_companyaddress").val(),resolver_address: $("#input_resolveraddress").val()},
            type:"POST",
            success: function(result){
                //$("#div1").html(result);
                window.alert(result);
            },
            error: function(xhr, status, error) {
                alert(xhr.status);
                alert(thrownError);
              }
    });
    });
});
    