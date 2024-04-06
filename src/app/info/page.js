
async function getData(){
    try{
        const data = await fetch('https://bandwith-test.vercel.app/api/ping',{cache:"no-store"})
        if(!data.ok) return [{
           proveedor:'FEU',
           imagen:'nop'
        }]
        const res = await data.json()
        return res
    } catch(err){
         return err
    }
}

export async function info(){
    const data = await getData()
    console.log(data)
    return(
        <>

                  
                    <p >{data[0].proveedor}</p>
                    <img src={data[0].imagen}/>
             

        </>
    )
}

export default info