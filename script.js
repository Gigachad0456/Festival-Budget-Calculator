function calculateBudget() {
  let festivalName =
    document.getElementById("festival").value || "Your Festival";
  let days = parseInt(document.getElementById("days").value) || 1;
  let travel = parseInt(document.getElementById("travel").value) || 0;
  let stay = parseInt(document.getElementById("stay").value) || 0;
  let food = parseInt(document.getElementById("food").value) || 0;
  let misc = parseInt(document.getElementById("misc").value) || 0;

  let travelCost = travel;
  let stayCost = stay * days;
  let foodCost = food * days;
  let miscCost = misc * days;

  let total = travelCost + stayCost + foodCost + miscCost;

  document.getElementById("result").innerHTML = `
    <strong>${festivalName} Trip Estimated Budget:</strong> ₹${total.toLocaleString()}<br>
    🚌 Travel: ₹${travelCost.toLocaleString()}<br>
    🏨 Stay: ₹${stayCost.toLocaleString()}<br>
    🍲 Food: ₹${foodCost.toLocaleString()}<br>
    🎁 Misc: ₹${miscCost.toLocaleString()}
  `;
}
