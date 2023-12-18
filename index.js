const btnSave = document.getElementById("btn-save");
const textNote = document.getElementById("text-note");
const notas = document.getElementById("notas");

textNote.focus();
btnSave.addEventListener("click", () => {
  saveNote();
});

function saveNote() {
  const id = getId();
  const noteCard = document.createElement("div");

  noteCard.innerHTML = `<div id='note-${id}' class="content-card">
    <p>${textNote.value}</p>
    <button onclick='deleteNote(${id})'>Borrar</button>
  </div>`;

  notas.appendChild(noteCard);
  textNote.value = "";
  textNote.focus();
}

textNote.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    saveNote();
  }
});

function deleteNote(id) {
  const noteToRemove = document.getElementById(`note-${id}`);
  noteToRemove.outerHTML = "";
}

function getId() {
  return Math.floor(Math.random() * (10000 - 0 + 1) + 0);
}

const nombre = "Ricardo";
const apellido = "Ramos";

console.log(`${nombre} ${apellido}`);