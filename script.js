document.addEventListener('DOMContentLoaded', function() {
    const showNotesBtn = document.getElementById('showNotesBtn');
    const transcriptBtn = document.getElementById('transcriptBtn');
    const showNotesContent = document.getElementById('showNotesContent');
    const transcriptContent = document.getElementById('transcriptContent');

    showNotesBtn.addEventListener('click', function(event) {
        showNotesContent.classList.toggle('hidden');
        event.stopPropagation(); // Prevent this click from triggering the document listener
    });

    transcriptBtn.addEventListener('click', function(event) {
        transcriptContent.classList.toggle('hidden');
        event.stopPropagation(); // Prevent this click from triggering the document listener
    });

    // Listener for clicks outside of the content areas to hide them
    document.addEventListener('click', function(event) {
        if (!showNotesContent.contains(event.target) && !showNotesBtn.contains(event.target)) {
            showNotesContent.classList.add('hidden');
        }
        if (!transcriptContent.contains(event.target) && !transcriptBtn.contains(event.target)) {
            transcriptContent.classList.add('hidden');
        }
    });
});

