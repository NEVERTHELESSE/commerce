import useSWR from "swr";
import axios from "axios";

// Axios fetcher function
const fetcher = (url) => axios.get(url).then((res) => res.data);

function App() {
  // Use SWR with Axios fetcher
  const { data, error, isLoading } = useSWR(
    "https://api.example.com/data",
    fetcher
  );

  if (error) return <div>Error loading data</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
