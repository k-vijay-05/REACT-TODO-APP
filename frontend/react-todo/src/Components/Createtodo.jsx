export function CreateTodo(){
    return <div>
        <input style={{
            padding:15,
            margin:15
        }} type="text" placeholder="title" onChange={function(e){
            const value=e.target.value;
            setTitle(e.target.value);
        }}/><br />
        <input  
        style={{
            padding:15,
            margin:15
        }} type="text" placeholder="description" onChange={function(e){
            const value=e.target.value;
            setDescription(e.target.value);
        }}/><br />
        <button
         style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todos",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers: {
                    "contentType":"application/json"
                }
            })
            .then(async function(res){
                const json=await res.json();
                alert("Todo added");
            })
        }}
      
          >ADD TODO</button>
    </div>

}
