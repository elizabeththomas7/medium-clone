import {React,useEffect,useState} from 'react'
import db from './firebase'
import Card from 'react-bootstrap/Card'
import './ArticleList.css'
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";


function ArticleList() {
    const [articles,setArticles]=useState([]);

  //connecting to db
  useEffect(()=>{
    db.collection('articles').onSnapshot(snapshot=>{
      console.log(snapshot.docs.map(doc=>doc.data()));
      setArticles(snapshot.docs.map(doc=>doc.data()))
    })
  },[]);

    return (
        <div>
            <div className='article-column'>
    {articles.map(article=>(
        <div>
      <Card className='article-body' >
    
    <Card.Body>
      <Card.Text className='article-title'>
      {article.title}
      </Card.Text>

      <Link to={{
  pathname: '/edit-article',
  state: {
    article: article
  }
}}>
      <Card.Text className='article-title'>
      Edit Article
      </Card.Text>
      </Link>
      <Link to={{
  pathname: '/delete',
  state: {
    article: {article}
  }
}}>
      <Card.Text className='article-title'>
      Delete Article
      </Card.Text>
      </Link>
    </Card.Body>
    <Card.Img  className='article-img' src={article.image} />
    
  </Card>
  <Divider />
  </div>
    ))}
    
  </div>
  
        </div>
    )
}

export default ArticleList
