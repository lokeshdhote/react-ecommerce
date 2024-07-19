import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { asynccart, asynclike } from "../store/Actions/productAction";

const Details = ()=>{
  const {id} =useParams()
  const dispatch =useDispatch()
  const {product} = useSelector((state)=> state.productReducer)

  const data =  product.find((e)=> e.id  == id)
  const {like} = useSelector((state)=> state.productReducer)
const dataLike = (id)=>{
   
  dispatch(asynclike(id))
}
const dataCart = (id)=>{
   
  dispatch(asynccart(id))
}


    return(
      <div className="w-screen min-h-screen bg-emerald-700  text-">
   <div className="w-screen h-[4vw]  pl-[4vw]   pt-[2vw] flex items-center " >
   <Link to={"/"} className="   text-white text-2xl  " >     <i className="ri-arrow-left-line"></i></Link>
   </div>

   <div className=" w-screen h-[40vw] pt-[4vw] overflow-hidden">
<div className=" w-screen  flex  " >

  <div className="w-[40%]   items-center flex flex-col gap-[5vw]  "  >
<div  className="w-[22vw] h-[22vw]  ">
   <img className="w-full h-full object-contain" src={data.image}alt={data.title} />
 
   </div>
  
<div className=" flex  gap-[1vw] ">
  
<div className="text-white text-center  flex gap-[1vw] flex-col"> 
    <h2 className="text-xl text-stone-300 font-[400] ">{data.title}</h2>
  <h4 className="text-xl font-[600] ">₹ {data.price}</h4>
 
 
</div>
<div>  {like.includes(data.id) ? (<> <i onClick={()=>dataLike(data.id)} className="ri-heart-3-fill text-red-500 text-2xl cursor-pointer">  </i></>)
:
(<> <i onClick={()=>dataLike(data.id)} className="ri-heart-3-line text-2xl  cursor-pointer">  </i></>)}

</div>
  </div>

</div>
  <div className="w-[60%] h-[30vw]  flex flex-col items-center pt-[5vw] gap-[4vw]  "    >
 <p className="text-white w-[30vw] "><li>{data.description}</li> </p>
 <h6 className="text-stone-200 text-xl "> Rating : {data.rating.rate} </h6>

 <Link   to={`/cart/${data.id}`} >
 <div className="w-[10vw] h-[3vw] bg-red-200 rounded flex items-center justify-center  cursor-pointer active:scale-[0.98] " >
   <h4 onClick={()=>dataCart(data.id)} className="text-lg">Add to cart</h4>
 </div>
</Link>
  </div>
</div>

   </div>
        
      </div>
    )
}
export default Details