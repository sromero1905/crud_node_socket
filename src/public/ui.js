const notesList = document.querySelector('#notes')

const appendnote = note =>{
   console.log(note);
    notesList.innerHTML = `<h1>${note.title}</h1>`
}