export const options = {
    method: "GET",
    url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
    params: {
        bl_lat: "34.391297",
        bl_lng: "25.698739",
        tr_lat: "43.255204",
        tr_lng: "44.693651",
        limit: "300",
    },
    headers: {
        "x-rapidapi-key": "75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247",
        "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
    },
};