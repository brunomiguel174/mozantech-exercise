export default async function apiParts(){
    const response = await fetch("http://localhost:8081/store/parts");
    var data = await response.json();
    return data;
}