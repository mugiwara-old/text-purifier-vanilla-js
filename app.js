function updateNotification(e) {
    const notification = document.getElementById('notification')
    let string = '';
    if (e.target.value.length === 0) string = 'Just paste your grubby text!'
    else string = 'Your formatted text has been converted to plain text and pasted to your navigator clipboard!'
    notification.innerHTML = string
}

async function updateClipboard(e) {
  const navigtorClipboard = await navigator.clipboard.readText()
  if(navigtorClipboard.length === 0) return;
  const copyText = document.getElementById('textarea')
  copyText.select()
  copyText.setSelectionRange(0, 99999) /* For mobile devices */
  await navigator.clipboard.writeText(copyText.value)
}

const textarea = document.getElementById('textarea')
textarea.onkeyup = updateNotification
textarea.onpaste = updateClipboard