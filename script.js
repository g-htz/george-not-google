document.getElementById('searchButton').addEventListener('click', function() {
    var query = document.getElementById('searchInput').value;

    if(query.trim() !== '') {
        alert("That's why my name's George and not Google, please Google it next time 🥳");
    }
});
