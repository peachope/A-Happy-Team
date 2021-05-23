$(document).ready(function() {
    const buttons = [{
            btnName: "Adobe Photoshop",
            backgroundColor: "#F3525A",
        },
        {
            btnName: "Adobe Premere",
            backgroundColor: "#00D280",
        },
        {
            btnName: "Adobe After Effect",
            backgroundColor: "#FFB700",
        },
        {
            btnName: "Cinema 4DMax",
            backgroundColor: "#662E9B",
        },
    ];
    renderButton(buttons, '#buttons');
});

function renderButton(list, selector) {
    list.map((val) => {
        $(`<button style="background: ${val.backgroundColor}">${val.btnName}</button>`).appendTo('#buttons');
    })
}