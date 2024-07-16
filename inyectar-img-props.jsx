import { useState } from "react"
import { Footer } from "./components/Footer"
import { Guitarra } from "./components/Guitarra"
import { Header } from "./components/Header"
import { db } from "./data/db"






function App() {
    const [data, setdata] = useState(db)
    console.log(data)
    
    
    // useEffect(() => {
    //   setdata(db)
    
    //   return () => {
        
    //   }
    // }, [])
    

  return (
    <>
    <Header/>

  <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>
      {/* como mostrar un arreglo usando state y .map va dentro del retrun  */}
      <div className="row mt-5">
            {data.map( (guitarrap) => {
              return(
                <Guitarra
                key={guitarrap.id} // siempre debe tener key para que no de error 
               guitarrap={guitarrap}
                />
              )
            })}
 
        </div>
      
  </main>

    <Footer/>
  
    </>
  )
}

export default App
