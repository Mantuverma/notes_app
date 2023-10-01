
let btn1 = document.getElementById('btn');
let container = document.querySelector('.container');
let addnotes = ()=>{
    // let container = ;
    let note =document.createElement('div');
    note.classList.add('note');
    note.innerHTML = ` <div class="tool">      
                <h3 style="margin-right: 80px;">note book</h3>
                <i class="fa-solid fa-floppy-disk save"></i>
                <i class="del  fa-solid fa-trash "></i>
                </div>
                <textarea> </textarea>
                </div>`;
        
container.appendChild(note);
note.querySelector('.del').addEventListener('click',()=>{
    console.log('clicked');
    note.remove();
    });
    ;       
   
}



btn1.addEventListener('click',()=>{
    addnotes();
})


