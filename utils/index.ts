export async function fetchJobs() {
  const X_RapidAPI_Key = process.env.X_RapidAPI_Key || "";

  const headers = new Headers();
  // "X-RapidAPI-Key": X_RapidAPI_Key || null,
  // "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  headers.append("X-RapidAPI-Key", X_RapidAPI_Key);
  headers.append("X-RapidAPI-Host", "jsearch.p.rapidapi.com");

  const response = await fetch(
    "https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1",
    { headers: headers }
  );

  const result = await response.json();

  if (!result) {
    throw new Error("No data received from the server");
  }

  return result;
}
