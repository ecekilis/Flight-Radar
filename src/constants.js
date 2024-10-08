export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
        bl_lat: "34.391297",
        bl_lng: "25.698739",
        tr_lat: "43.255204",
        tr_lng: "44.693651",
        limit: '200'
    },
    headers: {
        'x-rapidapi-key': '0325583bc9msh2062c7fe89b36d4p12dc36jsn8e58f7ac265a',
        'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
};


export const detailOpt = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
    params: { flight: null },
    headers: {
        'x-rapidapi-key': '0325583bc9msh2062c7fe89b36d4p12dc36jsn8e58f7ac265a',
        'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
};