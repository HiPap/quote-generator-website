function switch_scene(){
    window.location.href = "index.html";
}

const storedQuotes = JSON.parse(localStorage.getItem("quoteHistory")) || [];
const table = document.getElementById("sigma_table");

storedQuotes.forEach(quote => {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.textContent = quote;
    row.appendChild(cell);
    table.appendChild(row);
});
