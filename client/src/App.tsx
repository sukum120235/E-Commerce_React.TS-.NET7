import { useEffect, useState } from "react";



function App() {

  const [data,setData] = useState<any[]>([])

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
    .then(res => res.json())
    .then(jsn => setData(jsn))
  },[]);

  return (
    <ul>
        {data.map(x => (
          <li key={x.id}>{x.name} - {x.price}</li>
        ))}

    </ul>
  );
}

export default App;
