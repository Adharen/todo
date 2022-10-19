import './App.css';
import React,{useState} from 'react';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
  const [set, reset] = useState("");

    const change = (event) => {
        reset(event.target.value);
      }


// const [savedata,setsavedata] = useState([]);
// const [c,sc] = useState(0);
// useEffect(()=>{
   
// })

// const save=(e)=>{
//   e.preventDefault();
//   const array={name:name,email:email,pass:pass};
//   setsavedata([...savedata,array]);

// }

// const clearall=()=>{
//   setsavedata([]);
// }

// const remove=(data)=>{
//   //    alert(id)
//      const filterout = savedata.filter( (val) => {
//      return val.id!==data;
//      })
//      setsavedata(filterout)
//    }
    

  return (
    // <div className="App">
    //  <form action="" className='form' onSubmit={save}>
    //    <div className="imp">
    //     <label htmlFor="">Enter Your Name:</label>
    //     <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
    //    </div>
    //    <div className="imp">
    //     <label htmlFor="">Enter Your Email:</label>
    //     <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
    //    </div>
    //    <div className="imp">
    //     <label htmlFor="">Enter Your password:</label>
    //     <input type="password" value={pass} onChange={(e)=>setpass(e.target.value)}/>
    //    </div>
    //    <button type='submit' onClick={()=>sc(c+1)}>Save{c}</button>
    //  </form>
    //   <button onClick={clearall}>All clear</button>
    //   <div className="render">
    //   {
    //     savedata.map((val)=>{
    //       return(
    //         < div className="todo">
    //           <p>Your name is :{val.name}</p>
    //           <p>Your email id is : {val.email}</p>
    //           <p>Your password is :{val.pass}</p>
    //           <button onClick={()=>remove(val.id)}>Remove</button>
    //         </div>
    //       )
    //     })
    //   }
    //  </div>
    //  </div>
    
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">TODOWEB</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href='/'>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">About</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" set={set} onChange={change} placeholder="Search" aria-label="Search"/>
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Check!</strong> You should check all messages.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<Form set={set} change={change}/>
    </>
  );
}

export default App;
