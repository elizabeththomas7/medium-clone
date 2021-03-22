import React from 'react'
import './NewArticle.css'
import { Button} from '@material-ui/core';

function EditArticle(props) {
    return (
        
        <div >
            
            <form className='container'>
    <input type="text" name="name" value={props.location.state.article.title}  className='form-items'/>
    <input type="text" name="name" value={props.location.state.article.category} className='form-items'/>
    <input type="text" name="name" value={props.location.state.article.body} className='form-items'/>
    <Button type="submit" variant="contained" color="primary" className='form-items'  >
Edit  </Button>
</form>
        </div>
    )
}

export default EditArticle
