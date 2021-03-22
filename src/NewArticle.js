import {React,useEffect,useState} from 'react'
import './NewArticle.css'
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import db from './firebase'

function NewArticle() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

    const addTodo = (e) => {
        // preventing default nature of form of refresh
        e.preventDefault();
        
        db.collection('articles').add({
          body: body,
          title:title,
          category:category,
          image:image
        })
    
        // to remove the entered words from input after clicking button
        setTitle("");
        setCategory("");
        setBody("");
        setImage("");
      }

    return (
        
        <div >
            <form className='container'>
        <FormControl>
    <input type="text" name="name" value={title} onChange={e => setTitle(e.target.value)} placeholder="Article Title" className='form-items'/>
    <input type="text" name="name" value={category} onChange={e => setCategory(e.target.value)} placeholder="Article preference" className='form-items'/>
    <input type="text" name="name" value={body} onChange={e => setBody(e.target.value)} placeholder="Article Body" className='form-items'/>
    <input type="text" name="name" value={image} onChange={e => setImage(e.target.value)} placeholder="Article Image" className='form-items'/>
    </FormControl>
  <Button type="submit" variant="contained" color="primary"  className='form-items' onClick={addTodo} >
      Publish
  </Button>
</form>
        </div>
    )
}

export default NewArticle
