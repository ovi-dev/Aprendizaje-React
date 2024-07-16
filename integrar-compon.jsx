<main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>
      {/* como mostrar un arreglo usando state y .map va dentro del retrun  */}
      <div className="row mt-5">
            {data.map( () => {
              return(
                <Guitarra/>
              )
            })}
        
        
        

        </div>
      
  </main>