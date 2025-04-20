const api_url =  "https://worker-clinica-ceub.hiago-douglas.workers.dev/"
//const api_url = "http://127.0.0.1:8787/"; //teste local

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
    //console.log("result request", result)
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function scheduleappointmentWorker(datascheduleappointment) {
    try {
      const data = {
        type: "scheduleappointmentWorker",
        datascheduleappointment: datascheduleappointment
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