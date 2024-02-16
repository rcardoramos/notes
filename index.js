const btnSave = document.getElementById("btn-save");
const textNote = document.getElementById("text-note");
const notas = document.getElementById("notas");

textNote.focus();
btnSave.addEventListener("click", () => {
  saveNote();
});

function generateId() {
  return Math.floor(Math.random() * (10000 - 0 + 1) + 0);
}

function saveNote() {
  const id = generateId();
  const noteCard = document.createElement("div");

  noteCard.innerHTML = `<div id='note-${id}' class="content-card">
    <p>${textNote.value}</p>
    <button onclick='deleteNote(${id})'>Borrar</button>
  </div>`;

//appendChild 
  notas.appendChild(noteCard);
  textNote.value = "";
  textNote.focus();
}

function deleteNote(id) {
  const noteToRemove = document.getElementById(`note-${id}`);
  noteToRemove.outerHTML = "";
}
