import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import './ArticleFeed.css'
import { Divider,Link } from '@material-ui/core';
import {FeedBlogs} from './data/FeedBlogs'
import db from './firebase'

function ArticleFeed() {

  const [Blogs,setBlogs]=useState([]);
  const [preferences,setPreferences]=useState(['art','productivity']);
  const prefs=[''];

  //connecting to db
  useEffect(()=>{
    db.collection('productivity').onSnapshot(snapshot=>{
      console.log(snapshot.docs.map(doc=>doc.data()));
      setBlogs(snapshot.docs.map(doc=>doc.data()))
    })
  },[]);

  preferences.map(pref=>{
    
    var newArray = Blogs.filter(function (blog) {
      return blog.category== pref;
    });
    
    prefs.push({
      category: pref,
      details:newArray.map(arr=>
        ({
          author:arr.author,
          body:arr.body,
          image:arr.image,
          title:arr.title,
        })
      )
  });

  })

  console.log(prefs);

    return (
      <div>
        {prefs.map(preff=>
          (
            <div>
            <div className='feed-category'>
            {preff.category}
          </div>
          <div className='feed-body'>
            <a href='/blog'>
              <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={preff.details[0].image} />
    <Card.Body>
    <Card.Title className='article-author'>{preff.details[0].author} </Card.Title>
      <Card.Text className='article-title'>
      {preff.details[0].title}
      </Card.Text>
    </Card.Body>
  </Card>
  </a>
  <div className='feedbody-column'>
    {preff.details.map(blog=>(
      <Card className='feed-body' >
    
    <Card.Body>
      <Card.Title className='article-author'>{preff.author}</Card.Title>
      <Card.Text className='article-title'>
      {preff.title}
      </Card.Text>
    </Card.Body>
    <Card.Img  className='feed-column-img' src={preff.image} />
  </Card>
    ))}
  </div>
          </div>
          <Divider variant="middle" />
          </div>    
    ))}
    </div>
    )}

export default ArticleFeed
