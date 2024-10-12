import axios from "axios";

const EventData = async ({ params }) => {
  const { slug } = params;
  const [propertyId, token] = slug;

  let realTimeData = null;
  let error = null;

  try {
    // Fetch the real-time data from your backend
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/reports/${propertyId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    realTimeData = response.data;
  } catch (err) {
    console.error("Error fetching real-time data:", err);
    error = err.response?.data?.message || "Failed to fetch data";
  }

  return (
    <div>
      <h1>Real-Time Data for Property ID: {propertyId}</h1>
      {error ? (
        <div>Error fetching real-time data: {error}</div>
      ) : (
        <pre>{JSON.stringify(realTimeData, null, 2)}</pre>
      )}
    </div>
  );
};

export default EventData;
