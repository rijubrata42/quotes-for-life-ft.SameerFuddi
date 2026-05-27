// Get random quote
document.getElementById('btn-random').addEventListener('click', function () {
  fetch('/random')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      document.getElementById('quote-text').textContent = data.text;
      document.getElementById('quote-id').textContent = 'Quote #' + data.id;
    })
    .catch(function () {
      document.getElementById('quote-text').textContent = 'Something went wrong!';
    });
});

// Search by ID
document.getElementById('btn-search').addEventListener('click', function () {
  var id = document.getElementById('id-input').value;
  if (!id) {
    document.getElementById('search-result').textContent = 'Please enter an ID.';
    return;
  }

  fetch('/quote/' + id)
    .then(function (res) {
      if (!res.ok) {
        document.getElementById('search-result').textContent = 'Quote not found.';
        return null;
      }
      return res.json();
    })
    .then(function (data) {
      if (data) {
        document.getElementById('search-result').textContent = '#' + data.id + ': ' + data.text;
      }
    })
    .catch(function () {
      document.getElementById('search-result').textContent = 'Something went wrong!';
    });
});
