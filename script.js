document.getElementById("submit").addEventListener("click", function() {
    let price = 100;
  
    let education = document.getElementById("education").value;
    price *= parseFloat(education);
  
    let netWorth = document.getElementById("networth").value;
    price *= parseFloat(netWorth);
  
    if (document.getElementById("cook").checked) price += parseFloat(document.getElementById("cook").value);
    if (document.getElementById("instrument").checked) price += parseFloat(document.getElementById("instrument").value);
    if (document.getElementById("easygoing").checked) price += parseFloat(document.getElementById("easygoing").value);
  
    let age = document.querySelector('input[name="age"]:checked').value;
    price *= parseFloat(age);
  
    if (document.getElementById("gossip_parents").checked) price *= parseFloat(document.getElementById("gossip_parents").value);
    if (document.getElementById("gossip_character").checked) price *= parseFloat(document.getElementById("gossip_character").value);
    if (document.getElementById("general_gossip").checked) price += parseFloat(document.getElementById("general_gossip").value);
  
    document.getElementById("result").innerHTML = "Final Price: $" + price.toFixed(2);
  });
  