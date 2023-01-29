
const url = "https://randomuser.me/api/?results=15&inc=name,dob,gender,email,nat,picture&results=15";

let tableData = "";

fetch(url)
    .then(response => response.json())
    .then(data => {

        for (let i = 0; i <= data.info.results; i++) {
            let element = document.getElementById("tableBody");
            element.innerHTML +=  `
                    <tbody>
                        <tr>
                            <td>${data.results[i].name.first}</td>
                            <td>${data.results[i].name.last}</td>
                            <td>${data.results[i].dob.age}</td>
                            <td>${data.results[i].gender}</td>
                            <td>${data.results[i].email}</td>
                            <td>
                                <img src="${data.results[i].picture.thumbnail}"/>
                            </td>
                        </tr>
                    </tbody>
            `
        }
        console.log(data);
    });


