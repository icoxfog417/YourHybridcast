// Saves options to chrome.storage
function save_options() {
    var options = {};
    $(".option").each(function () {
        options[$(this).attr("id")] = $(this).val();
    })

  chrome.storage.sync.set(options, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    targetSite: 'https://icoxfog417.github.io/YourHybridcast/'
  }, function (items) {
    $(".option").each(function () {
        $(this).val(items[$(this).attr("id")]);
    })
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
