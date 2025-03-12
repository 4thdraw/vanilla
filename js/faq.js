// 사용자와의 상호작용을 통해 FAQ 항목을 동적으로 표시하고, 
// 시간에 따라 자동으로 변경되는 FAQ 뷰를 제공하는 것
window.addEventListener("DOMContentLoaded",()=>{
    const faq = [
        {
            dt : "처음 3초마다 자동으로  dd가 하나씩 오픈됩니다.",
            dd : "제품의 부직포는 물에 녹지 않는 재질이지만 만일 찢어지거나 가루가 빠져나올 경우에는 | 의류에 철이나 녹 얼룩이 생길 수 있습니다. | 철 또는 녹 얼룩은 일반 세탁으로는 제거하기가 쉽지 않으므로 | 표백제를 사용하여 제거하시기 바랍니다. 또한 세탁기에 가루가 남아있을 경우, 세탁기가 마른 후 진공청소기로 깨끗하게 청소하시기 바랍니다."        
        },
        {
            dt : "제목을 클릭하면 자동롤링이 멈춤니다. 그리고 해당 dd가 오픈됩니다.",
            dd : "제품의 부직포는 물에 녹지 않는 재질이지만 만일 찢어지거나 가루가 빠져나올 경우에는 | 의류에 철이나 녹 얼룩이 생길 수 있습니다. | 철 또는 녹 얼룩은 일반 세탁으로는 제거하기가 쉽지 않으므로 | 표백제를 사용하여 제거하시기 바랍니다. 또한 세탁기에 가루가 남아있을 경우, 세탁기가 마른 후 진공청소기로 깨끗하게 청소하시기 바랍니다."        
        },
        {
            dt : "더이상 클릭을 하지않으면 다시 자동롤링이 이어서 dd를 오픈합니다.",
            dd : "제품의 부직포는 물에 녹지 않는 재질이지만 만일 찢어지거나 가루가 빠져나올 경우에는 | 의류에 철이나 녹 얼룩이 생길 수 있습니다. | 철 또는 녹 얼룩은 일반 세탁으로는 제거하기가 쉽지 않으므로 | 표백제를 사용하여 제거하시기 바랍니다. 또한 세탁기에 가루가 남아있을 경우, 세탁기가 마른 후 진공청소기로 깨끗하게 청소하시기 바랍니다."        
        },
        {
            dt : "템플릿 함수를 사용해서 최적화 및 DB를 분리하여 관리합니다.",
            dd : "제품의 부직포는 물에 녹지 않는 재질이지만 만일 찢어지거나 가루가 빠져나올 경우에는 | 의류에 철이나 녹 얼룩이 생길 수 있습니다. | 철 또는 녹 얼룩은 일반 세탁으로는 제거하기가 쉽지 않으므로 | 표백제를 사용하여 제거하시기 바랍니다. 또한 세탁기에 가루가 남아있을 경우, 세탁기가 마른 후 진공청소기로 깨끗하게 청소하시기 바랍니다."        
        }
    ]

const faqdom = document.querySelector("#faq dl"); 
// dl객체 저장

let faqtag =``; // 태그저장할 변수선언
 
           
for(x of faq){ // for으로 생선된 데이터 누적저장 +=
   faqtag +=`<dt  class="border-top py-3 d-flex justify-content-between">
                <strong>${x["dt"]}</strong>
                <i class="bi bi-chevron-down"></i>
              </dt>
              <dd  class="border-bottom py-3 bg-light">${
                x.dd.split("|").join("<br>")
                //x.dd.split("|"): | 기호를 기준으로 배열이 됨
                //join("<br>"): 분리된 배열을 <br> 태그로 연결하여 하나의 문자열
            }</dd>`;
}       


faqdom.innerHTML = faqtag; 


const faqlist = faqdom.querySelectorAll("dt");
let count = 0;

updateActiveClass(faqlist, count);

//반드시 let으로 변경 삭제하고 다시 재저장을 해야하므로
let autoopen = setInterval(() => {
    count++;
    count %= faq.length;
    updateActiveClass(faqlist, count );
}, 3000);

faqlist.forEach((ele, idx)=>{
    ele.addEventListener("click", function(){
        clearInterval(autoopen); // 즉시 자동롤링 삭제
        count = idx; //중요 다시 자동롤링때 이어서 진행하기 위해서
       
        updateActiveClass(faqlist, count ); // 클릭시 바로진행

         // 3초 대기시간내에 다른 클릭 없으면 다시 자동롤링 진행
         autoopen = setInterval(() => {
            count++;
            count %= faq.length;
            updateActiveClass(faqlist, count );
        }, 3000);

    })
 })

function updateActiveClass(list, index, activeClass = "active") {

    list.forEach((ele) => {
        ele.classList.remove(activeClass);
    });   
    list[index].classList.add(activeClass);
}

})