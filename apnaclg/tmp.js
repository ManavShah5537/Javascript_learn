async function fetchData() {
  try {
    // 1. Send the request and wait for the response header
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');

    // 2. Check if the request was successful (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 3. Wait for the full response body to be parsed as JSON
    const data = await response.json();
    
    console.log(data.text);
    return data;
  } catch (error) {
    // 4. Handle network or parsing errors
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Execute the function
fetchData();