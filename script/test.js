heartStatus = [
    {
        "like": false,
    }
]


function changeStatusHeart(){
    let heartDivRef = document.getElementById('heart_status');
    heartStatus[0].like = !heartStatus[0].like;

    if(heartStatus[0].like === true){
        heartDivRef.src = "./assets/imgs/like_heart_full.png";
    } else {
        heartDivRef.src = "./assets/imgs/like_heart_empty.png"
    }
}