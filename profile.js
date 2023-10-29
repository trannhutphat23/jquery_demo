var url = "./data.json"
var query = window.location.search.substring(1);
var id = query.split('=')[1]
$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: './data.json',
        dataType: 'json',
        success: function(info){
            const htmls = info.map(data => {
                if (id == data.id){
                    return `
                        <div class="profile_detail">
                            <a href="index.html"><button class="back-button">Back</button></a>
                            <img src="`+ data.image +`" alt="`+ data.name +`">
                            <h3>`+ data.name +`</h3>
                            <h2>About Me</h2>
                            <p>`+ data.AboutMe +`</p>
                            
                            <div class="info">
                                <div class="InfoContact">
                                    <h2>Contact Information</h2>
                                    <hr>
                                    <p>Email: <a href="mailto:`+data.email+`">`+data.email+`</a></p>
                                    <p>Số điện thoại: <a href="#">`+data.phone+`</a></p>
                                </div>
                                <div class="InfoSocial">
                                    <h2>Social Media</h2>
                                    <hr>
                                    <i class="fa-brands fa-facebook" style="color: #005eff; font-size: 40px; margin-right: 20px; cursor: pointer;"></i>
                                    <i class="fa-brands fa-instagram instagram"></i>
                                    <i class="fa-brands fa-twitter" style="color: #60b3e6; font-size: 40px; cursor: pointer; margin-right: 20px;"></i>
                                </div>
                            </div>
                        </div>
                    `
                }
            });
            const others = info.map(data => {
                if (id != data.id){
                    return `
                        <a href="profile.html?id=`+ data.id +`">
                            <img src="`+ data.image +`" alt="`+ data.name +`">
                        </a>
                    `
                }
            });
            $("#profile").html(htmls.join(''));
            $("#members").html(others.join(''));
        }
    })
})