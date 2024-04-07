import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import { useState } from 'react';

function App() {

  const [addItem, setAddItem] = useState([  ]);

  const addNote = (note) =>{
    // alert("im clicked !");
    setAddItem((preData)=>{
      return  [...preData, note];
});
    // console.log(note);
    
  };

  const onDelete = (id) => {
    setAddItem((oldData)=>
    oldData.filter((currData, index) =>{
      return index !== id;
    })
 )};
  return (
    <>
      <Header />
      <Footer />
      <CreateNote passNote={addNote}/>
      {
        addItem.map((value, index)=>{
          return (
            <Note 
                  key={index}
                  id={index}
                  title={value.title}
                  content={value.content}
                  deleteItem={onDelete}
          />
          );
        })
      }
    </>
  );
}

export default App;
