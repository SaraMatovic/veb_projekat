import './App.css';

function App() {

    const UzimanjeVrednosti = (e) => {
        e.preventDefault();

        let vrednost = document.querySelector('input').value;
        let lista = document.querySelector('ul');

        if (vrednost !== "") {
            let uneto = document.createElement('li');
            let text = document.createTextNode(vrednost);
    
            uneto.appendChild(text);
            lista.appendChild(uneto);
    
            document.querySelector('input').value = "";
        }
        else {
            alert("Unesi ime u polje");
        }
        
    }

    return (
        <div className="App">
            <form onSubmit={UzimanjeVrednosti}>
                <div className="form-control">
                    <label>Ime: </label> <br />
                    <input name="ime" type="text" placeholder="Unesite ime"  /> <br />
                </div>
                <button type="submit">Unesi ime u listu</button>
            </form>

            <div className='ulLista'>
                <h2>Imena</h2>
                <ul className="lista">
                </ul>
            </div>
        </div>
    );
}

export default App;
