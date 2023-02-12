for(i=0; i<data.length; i++){
    const div = createElement(
        "div",
        "card p-3 shadow mx-auto m-2 border-3 text-primary pt-5",

        `<img src='${data[i].avatar}'>

        <h6>${data[i].frist_name} ${data[i].last_name}</h6>

        <p>${data[i].email}</p>`
    )
    $(".wrapper").appendChild(div)
}
