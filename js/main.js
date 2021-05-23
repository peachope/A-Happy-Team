$(document).ready(function() {
    $('.member-infor .container .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    const list = [{
            name: "Trần Thị Phương Anh",
            major: "N17DCPT003 - Thiết kế Đa phương tiện",
            description: '"Đầu lòng hai ả tố nga, Thúy Kiều là chị em là Phương Anh"',
            pro1: "Adobe Photoshop",
            pro2: "Adobe Illustrator",
            pro3: "Adobe Premere",
            pro4: "Adobe Affer Effect",
            image: "images/pa.png"
        },
        {
            name: "Trần Thị Bích Hợp",
            major: "N17DCPT017 - Phát triển ứng dụng Đa phương tiện",
            description: '"Một ngày viết code, cả đời fix bug"',
            pro1: "HTML",
            pro2: "SCSS/ CSS3",
            pro3: "JavaSrcipt",
            pro4: "VueJs",
            image: "images/hopppp.png"
        },
        {
            name: "Nguyễn Tấn Trọng",
            major: "N17DCPT053 - Thiết kế Đa phương tiện",
            description: '"Tôi là vua phần mềm, tôi có thể sử dụng hết bộ Adobe"',
            pro1: "Adobe Photoshop",
            pro2: "Adobe Premiere",
            pro3: "Adobe Affer Effect",
            pro4: "Cinema 4D",
            image: "images/kirby.png"
        },
    ]
    renderList(list, '.member-infor .container .owl-carousel');

});

function renderList(list, selector) {
    list.reverse().map((val, index) => {
        $(selector)
            .trigger("add.owl.carousel", [
                ` <div class="member ">
                     <div class="infor-member-team">
                            <div class="name-member">
                                <h4>${val.name}</h4>
                                <span>${val.major}</span>
                                <p class="major-member">${val.description}
                            </div>
                            <div class="hobbies">
                                <li><span>${val.pro1}</span></li>
                                <li><span>${val.pro2}</span></li>
                                <li><span>${val.pro3}</span></li>
                                <li><span>${val.pro4}</span></li>
                            </div>
                        </div>
                     <div class="image-member">
                        <img src="${val.image}" alt="">
                    </div>
                </div>`,
                index,
            ])
            .trigger("refresh.owl.carousel");
    });
}