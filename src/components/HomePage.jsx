import React, { useEffect } from 'react'
import { useGlobalState } from '../Global/GlobalState';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

function HomePage() {
  // const [items, setItems] = useState([])
  const { globalState, setGlobalState } = useGlobalState();

  useEffect(() => {
    fetch('https://msiddhesh008.github.io/jsonapi/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGlobalState({
          ...globalState, items: data
        })
      })
      .catch(error => {
        console.log(error)
      });
  },[])

   
  return (
    <>
      <div className='container mt-3'>
        <Navbar />
        <div className='row mt-4'>
          {
            globalState.items.map((ele, index) => { 
              return (
                <Link to="/ProductDetails" state={{ productIndex: index }} className={`col-3 mb-4 match-height ${ele.id}`} key={index}  >
                    <div className='card h-100'>
                      <div className='card-body d-flex justify-content-center flex-column text-center align-items-center'>
                        <img src={ele.image} alt="" height={100} width={100} />
                        <p>{ele.title}</p>
                        <button className='btn btn-info d-none'>Add to cart</button>
                      </div>
                    </div>
                  </Link>
              )
            })
          }
        </div>
      </div>
      
    </>
  )
}

export default HomePage