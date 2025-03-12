window.addEventListener("DOMContentLoaded",()=>{
    const faq = [
        {
            dt : "이전 전공과 다르게 프론트앤드 훈련을 받으셨는데...",
            dd : "제품의 부직포는 물에 녹지 않는 재질이지만 만일 찢어지거나 가루가 빠져나올 경우에는 | 의류에 철이나 녹 얼룩이 생길 수 있습니다. | 철 또는 녹 얼룩은 일반 세탁으로는 제거하기가 쉽지 않으므로 | 표백제를 사용하여 제거하시기 바랍니다. 또한 세탁기에 가루가 남아있을 경우, 세탁기가 마른 후 진공청소기로 깨끗하게 청소하시기 바랍니다."        
        },
        {
            dt : "협업을 위해 가장 필요한 것은 무엇인가요?",
            dd : "제품의 부직포는 물에 녹지 않는 재질이지만 만일 찢어지거나 가루가 빠져나올 경우에는 | 의류에 철이나 녹 얼룩이 생길 수 있습니다. | 철 또는 녹 얼룩은 일반 세탁으로는 제거하기가 쉽지 않으므로 | 표백제를 사용하여 제거하시기 바랍니다. 또한 세탁기에 가루가 남아있을 경우, 세탁기가 마른 후 진공청소기로 깨끗하게 청소하시기 바랍니다."        
        },
        {
            dt : "제품을 옷에 붙인 채 세탁했을 경우에는 어떻게 해야 하나요?",
            dd : "제품의 부직포는 물에 녹지 않는 재질이지만 만일 찢어지거나 가루가 빠져나올 경우에는 | 의류에 철이나 녹 얼룩이 생길 수 있습니다. | 철 또는 녹 얼룩은 일반 세탁으로는 제거하기가 쉽지 않으므로 | 표백제를 사용하여 제거하시기 바랍니다. 또한 세탁기에 가루가 남아있을 경우, 세탁기가 마른 후 진공청소기로 깨끗하게 청소하시기 바랍니다."        
        },
        {
            dt : "제품을 옷에 붙인 채 세탁했을 경우에는 어떻게 해야 하나요?",
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
              <dd  class="border-bottom py-3 bg-light">${x.dd}</dd>`;
}       


faqdom.innerHTML = faqtag; 
// dl에 누적된 데이터를 태그로 출력하기
// 동적객체 출력완료

//////////////////// 출력완성 ////////////

const faqlist = faqdom.querySelectorAll("dt");
let count = 0;

updateActiveClass(faqlist, count);

faqlist.forEach((ele, idx)=>{
    ele.addEventListener("click", function(){
        clearInterval(autoopen);
        autoopen = setInterval(() => {
            count++;
            count %= faq.length;
            updateActiveClass(faqlist, count );
        }, 3000);
        updateActiveClass(faqlist, idx );
    })
 })

const autoopen = setInterval(() => {
    count++;
    count %= faq.length;
    updateActiveClass(faqlist, count );
}, 3000);

// 다수객체 중 하나의 객체만 특정 클래스 주는 함수
// faq템플릿 함수 제작
function updateActiveClass(list, index, activeClass = "active") {
    // 모든 항목에서 지정된 클래스 제거
    list.forEach((ele) => {
        ele.classList.remove(activeClass);
    });

    // 현재 항목에 지정된 클래스 추가
    list[index].classList.add(activeClass);
}

})