import React, { useState } from "react";
import categories from "./categories";

    
const Category = () => {
  



    const[data,setData]=useState(categories);
    
    const filterResult=(catItem)=>{
   const Result=categories.filter((curData)=>{
    return curData.category===catItem;

   })
    
   setData(Result)
}




    const [count, setCount] = useState(0);
    const [aisDisabled,asetIsDisabled] = useState(false);
    const [risDisabled,rsetIsDisabled] = useState(false);
   
    const incrementCount = () => {
     
      setCount(count + 1,);
      asetIsDisabled(true);
      rsetIsDisabled(false);
    };
    const decrementCount = () => {
     
        setCount(count - 1,);
        rsetIsDisabled(true);
        asetIsDisabled(false);
      };
    
   

    return (
        <>
           
<nav className="navbar navbar-light bg-dark">
  <a className="text-center text-info  w-100 "><h1>Let'shop</h1></a>
  <button className="btn btn-info">Home</button>
  <button className="btn btn-info">Login</button>
</nav>



            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3"><div className="short">
                        <h2 className="mb-5"><b>Short By category</b></h2></div>
                        <button className="btn btn-info w-100 mb-4"onClick={()=>
                            filterResult("Men")}>Men</button>
                        <button className="btn btn-warning w-100 mb-4"onClick={()=>
                            filterResult("Women")}>Women</button>
                        <button className="btn btn-info w-100 mb-4"onClick={()=>
                            filterResult("childern")}>children</button>
                        
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>
                        setData(categories)}>all</button>
                        <div className="container">
                            <div className="head"><p>My cart</p></div>
                           
                                
                          
                            
                            <div className="foot">
                                <h3>
                                    Your cart</h3>
                              
                            
                                <h1>{count}</h1>
                            </div>
                          
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="row">
                            {data.map((values)=>{
                                const{id,title,price,image,Deatils}=values;
                                return(
                                    <>
                                     <div className="col-md-4 mb-4" key={id}>
                                <div class="card">
                                    <img src={ values.Image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p>price${price}</p>
                                        <p className="card-text">{Deatils}</p>
                                        <button className="btn btn-dark mb-4" disabled={aisDisabled}  onClick={incrementCount}>Add to cart</button>
                                        <button className="btn btn-dark " disabled={risDisabled} onClick={decrementCount}>Remove from cart</button>

                                       
                                    </div>
                                    
                                </div>
                            </div>
                                    </>
                                )
                            })}
                           
                            
                              

            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Category