const api_url = "http://127.0.0.1:8787/"; //teste local

export async function getScheaduledWorker() {
  try {
    const data = {
      type: "getScheduledTimes"
    };
    const response = await fetch(api_url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("result request", result)
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function teste() {
    try {
      const data = {
        type: "teste"
      };
      const response = await fetch(api_url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("result request", result)
      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  }