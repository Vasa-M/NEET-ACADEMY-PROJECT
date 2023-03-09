import Delete from "./deleteController";
import {BrowserRouter as Router ,Link,Route,Routes} from 'react-router-dom';
import PostController from "./postController";
import GetStudent from "./getController";
import UpdateController from "./updateController";
import "../src/form.css";
function Intro() {
    return (  
<Router>
  <h1>NEET ACADEMY</h1>
  <h5>REGISTER HERE FOR YOUR BETTER FUTURE</h5>
<ul class="nav">
  <li class="nav-item">
    <Link to="/PostController" class="nav-link">REGISTER</Link>
  </li>
   <li class="nav-item">
  <Link to="/GetStudent" class="nav-link" >VIEW DETAILS</Link>
  </li> 
  <li class="nav-item">
    <Link to="/UpdateController" class="nav-link active">UPDATE DETAILS</Link>
  </li>
   <li class="nav-item">
  <Link to="/Delete" class="nav-link" >DELETE DETAILS</Link>
  </li> 
</ul>
<Routes>
  <Route path="/PostController" element={<PostController/>}/>
  <Route path="/GetStudent" element={<GetStudent/>}/>
  <Route path="/Delete" element={<Delete/>}/>
  <Route path="/UpdateController" element={<UpdateController/>}/>
  
</Routes>
    </Router>
    );
}

export default Intro;