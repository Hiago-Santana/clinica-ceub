const api_url = "http://127.0.0.1:8787/"; //teste local

export async function teste() {
    try {
      const data = {
        teste: "teste"
      };
      const response = await fetch(api_url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      return result;
      console.log("result request", result)
    } catch (error) {
      console.error("Error:", error);
    }
  }