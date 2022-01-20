function App() {
  const { useState, useEffect } = React;
  const { Container } = ReactBootstrap;
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://emojihub.herokuapp.com/api/all/category_travel_and_places");
  const [query, setQuery] = useState("");
  console.log("Rendering App");
  useEffect(() => {
    console.log("Fetching data...");
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };

    fetchData();
  }, [url]);
  return (
    <Container>
    
      <form
        onSubmit={event => {
          setUrl(`https://emojihub.herokuapp.com/api/all/category_${query}`);

          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      

        {data.map((item, i) => (
       
              <ul className="list-group" key={i} >{item.name}
                <li className="list-group-item">HtmlCode: {item.htmlCode}</li>
                <li className="list-group-item">Unicode: {item.unicode}</li>
              </ul>
  
        ))}
     
    </Container>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));

//  // "https://hn.algolia.com/api/v1/search?query=redux"
