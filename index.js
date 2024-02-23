const btnSave = document.getElementById("btn-save");
const textNote = document.getElementById("text-note");
const notas = document.getElementById("notas");

textNote.focus();

function generateId() {
  return Math.floor(Math.random());
}

function saveNote() {
  const id = generateId();
  const noteCard = document.createElement("div");

  noteCard.innerHTML = `<div id='note-${id}' class="content-card">
  <p>${textNote.value}</p>
  <button onclick='deleteNote(${id})'>Borrar</button>
  </div>`;
  
  if (textNote.value.trim() === ""){
    alert("Por favor, ingresa texto para la nota.");
    return;
  }
  notas.appendChild(noteCard);
  textNote.value = "";
  textNote.focus();
}

btnSave.addEventListener("click", () => {
  saveNote();
});

function deleteNote(id) {
  const noteToRemove = document.getElementById(`note-${id}`);
  noteToRemove.outerHTML = "";
}
