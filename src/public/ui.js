const notesList = document.querySelector('#notes')

let savedId = ''

const noteUi = note => {
const div = document.createElement('div')

    console.log(note);
    div.innerHTML =
        `<div class="card card-body rounded-0 animate__animated animate__fadeInUp mb-2">
            <div class="d-flex justify-content-between">
                <h1 class="card-title h3">${note.title}</h1>
                <div>
                    <button class="btn btn-danger delete" data-id="${note.id}">delete</button>
                    <button class="btn btn-secondary update" data-id="${note.id}">update</button>
                </div>
            </div>
            <p>${note.description}</p>
        </div>
      `;
    const btndelete = div.querySelector('.delete')
    const btnupdate = div.querySelector('.update')
   
    btndelete.addEventListener('click',()=>{
        deletenote(btndelete.dataset.id)
    })
    btnupdate.addEventListener('click',()=>{
        getnote(btndelete.dataset.id)
    })

    return div 
}


const renderNotes = notes=>{
    notesList.innerHTML = ''
    notes.forEach((note)=>{
        notesList.append(noteUi(note))
    })
}

const appendnote = note =>{
    notesList.append(noteUi(note))
}