export default async function apiPartTypes(){
    const response = await fetch("http://localhost:8081/store/part-types");
    var data = await response.json();
    return data;
}


