import './App.css';
import Header from './Layout/Header'
import Feed from './ArticleFeed'
import Blog from './Blog'
import NewArticle from './NewArticle'
import ArticleList from './ArticleList'

import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditArticle from './EditArticle';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Switch>
          <Route  path='/' exact component={Feed}>
          </Route>
        <Route path="/blog" exact component={Blog}>
          </Route>
          <Route path="/new-article" exact component={NewArticle}>
          </Route>
          <Route path="/article-list" exact component={ArticleList}>
          </Route>
          <Route path="/edit-article" exact component={EditArticle}>
          </Route>
          
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
