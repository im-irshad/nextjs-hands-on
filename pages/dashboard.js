import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

function Dashboard() {
  const { data, error } = useSWR("dashboard", fetcher);
  console.log(data);
  if (error) return " An error has occured ";
  if (!data) return " Loading ";

  return (
    <div>
      <h2>{data[0].id}</h2>
      <h2>Dashboard</h2>
      <h2>Dashboard</h2>
      <h2>Dashboard</h2>
    </div>
  );
}

export default Dashboard;
