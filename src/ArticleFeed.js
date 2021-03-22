import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import './ArticleFeed.css'
import { Divider,Link } from '@material-ui/core';
import {FeedBlogs} from './data/FeedBlogs'
import db from './firebase'

function ArticleFeed() {

  const [Blogs,setBlogs]=useState(FeedBlogs);
  const [preferences]=['art','productivity'];

  //connecting to db
  // useEffect(()=>{
  //   db.collection('productivity').onSnapshot(snapshot=>{
  //     console.log(snapshot.docs.map(doc=>doc.data()));
  //     setBlogs(snapshot.docs.map(doc=>doc.data()))
  //   })
  // },[]);


    return (
      <div>
        {Blogs.map(blog=>
          (
            <div>
            <div className='feed-category'>
            {blog.category}
          </div>
          <div className='feed-body'>
            <div className='feed-left'>
            <a href='/blog'>
              <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={blog.details[0].image} />
    <Card.Body>
    <Card.Title className='article-author'>{blog.details[0].author} </Card.Title>
      <Card.Text className='article-title'>
      {blog.details[0].title}
      </Card.Text>
    </Card.Body>
  </Card>
  </a>
  </div>
  <div className='feedbody-column'>
    {blog.details.map(blog=>(
      <Card className='feed-body' >
    
    <Card.Body>
      <Card.Title className='article-author'>{blog.author}</Card.Title>
      <Card.Text className='article-title'>
      {blog.title}
      </Card.Text>
    </Card.Body>
    <Card.Img  className='feed-column-img' src={blog.image} />
  </Card>
    ))}
  </div>

  <div className='feedbody-mobile'>
    {blog.details.map(blog=>(
     <a href='/blog'>
     <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={blog.image} />
<Card.Body>
<Card.Title className='article-author'>{blog.author} </Card.Title>
<Card.Text className='article-title'>
{blog.title}
</Card.Text>
</Card.Body>
</Card>
</a>
    ))}
  </div>
          </div>
          <Divider variant="middle" />
          </div>    
    ))}
    </div>
    )}

export default ArticleFeed
