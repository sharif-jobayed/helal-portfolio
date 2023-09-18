


/* coverTexts */

const textCarousel = document.querySelector(".text-carousel");
const textSlides = document.querySelectorAll(".text-slide");
let currentSlideIndex = 0;

function showSlide(index) {
  textSlides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % textSlides.length;
  showSlide(currentSlideIndex);
}

setInterval(nextSlide, 2000);

showSlide(currentSlideIndex);

/* coverTexts ends */









/* Job Details */

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // Add active class to the clicked button and corresponding content
    const tabId = button.getAttribute("data-tab");
    const tabContent = document.getElementById(tabId);
    button.classList.add("active");
    tabContent.classList.add("active");
  });
});

/* Job Details end */









/* Training Details */

const trainingDetails=document.querySelectorAll(`.training>div>p`);

function resetTrainingFields(){
	for(let i of trainingDetails){
		i.textContent=``;
	}
}

// Training Buttons
const trainingBtn=document.querySelectorAll(`.trainingBtn`);
for(let i of trainingBtn){
	i.addEventListener(`click`,(b)=>{
		resetTrainingFields();

		// Get Button Data
		const trngBtn=b.target.getAttribute(`data-tab`);

		switch(trngBtn){
			case `trngBtn1`:
				for(let i of trainingDetails){
					if(i.classList.contains(`trainingTitle`)){
						i.textContent=`Applied Research Methodology in Agro Research`;
					}else if(i.classList.contains(`trainingTopic`)){
						i.textContent=`Understanding of agro research, Different steps of agro research, Common practices in and Challenges in agro research, Usage of different techniques to obtain desired output, Poverty indices and its analysis, Measuring different indicators, STATA/SPSS exercises with real data set, Difference in Difference (DiD) in impact evaluation, Econometrics in DiD in impact evaluation, Contents of the research report.`;
					}else if(i.classList.contains(`trainingInstitute`)){
						i.textContent=`Nielsen Company Bangladesh Limited`;
					}else if(i.classList.contains(`trainingCountry`)){
						i.textContent=`Bangladesh`;
					}else if(i.classList.contains(`trainingLocation`)){
						i.textContent=`Dhaka`;
					}else if(i.classList.contains(`trainingYear`)){
						i.textContent=`2015`;
					}else if(i.classList.contains(`trainingDuration`)){
						i.textContent=`01 Week`;
					}
				}
				break;

				case `trngBtn2`:
				for(let i of trainingDetails){
					if(i.classList.contains(`trainingTitle`)){
						i.textContent=`Development of Professional Selling Skill`;
					}else if(i.classList.contains(`trainingTopic`)){
						i.textContent=`Action Selling and Sales Process, Self-Development for Try Winning, Communication at Work and Time Management, Persuasion Techniques, Business Etiquette, Effective Presentation Skills.`;
					}else if(i.classList.contains(`trainingInstitute`)){
						i.textContent=`BRIDDHI-A Set of Professional Learning`;
					}else if(i.classList.contains(`trainingCountry`)){
						i.textContent=`Bangladesh`;
					}else if(i.classList.contains(`trainingLocation`)){
						i.textContent=`Dhaka`;
					}else if(i.classList.contains(`trainingYear`)){
						i.textContent=`2013`;
					}else if(i.classList.contains(`trainingDuration`)){
						i.textContent=`02 Days`;
					}
				}
				break;

				case `trngBtn3`:
				for(let i of trainingDetails){
					if(i.classList.contains(`trainingTitle`)){
						i.textContent=`The Manager’s School Program`;
					}else if(i.classList.contains(`trainingTopic`)){
						i.textContent=`Manager’s Role, Leadership Styles, Gaining Productivity from Team, How to steer team`;
					}else if(i.classList.contains(`trainingInstitute`)){
						i.textContent=`The Nielsen Company`;
					}else if(i.classList.contains(`trainingCountry`)){
						i.textContent=`Bangladesh`;
					}else if(i.classList.contains(`trainingLocation`)){
						i.textContent=`Dhaka`;
					}else if(i.classList.contains(`trainingYear`)){
						i.textContent=`2013`;
					}else if(i.classList.contains(`trainingDuration`)){
						i.textContent=`06 months attachment training`;
					}
				}
				break;

				case `trngBtn4`:
				for(let i of trainingDetails){
					if(i.classList.contains(`trainingTitle`)){
						i.textContent=`Nielsen Leadership Forum`;
					}else if(i.classList.contains(`trainingTopic`)){
						i.textContent=`Financial Leadership, Innovation and Best Practice, Leaders Growing Leaders`;
					}else if(i.classList.contains(`trainingInstitute`)){
						i.textContent=`The Nielsen Company`;
					}else if(i.classList.contains(`trainingCountry`)){
						i.textContent=`Bangladesh`;
					}else if(i.classList.contains(`trainingLocation`)){
						i.textContent=`Dhaka`;
					}else if(i.classList.contains(`trainingYear`)){
						i.textContent=`2012`;
					}else if(i.classList.contains(`trainingDuration`)){
						i.textContent=`02 Days`;
					}
				}
				break;

				case `trngBtn5`:
				for(let i of trainingDetails){
					if(i.classList.contains(`trainingTitle`)){
						i.textContent=`Leadership Excellence for Team Effectiveness & Team Spirit`;
					}else if(i.classList.contains(`trainingTopic`)){
						i.textContent=`Manage Conflicts in the Most Effective Manner, Problem Solving and Group Decision Making, Communication & understanding Human Behavior Potential, Improve Individual & Organizational Performance for High Productivity and Efficiency`;
					}else if(i.classList.contains(`trainingInstitute`)){
						i.textContent=`Prothom Alo Jobs`;
					}else if(i.classList.contains(`trainingCountry`)){
						i.textContent=`Bangladesh`;
					}else if(i.classList.contains(`trainingLocation`)){
						i.textContent=`Dhaka`;
					}else if(i.classList.contains(`trainingYear`)){
						i.textContent=`2011`;
					}else if(i.classList.contains(`trainingDuration`)){
						i.textContent=`01 Day`;
					}
				}
				break;

				case `trngBtn6`:
				for(let i of trainingDetails){
					if(i.classList.contains(`trainingTitle`)){
						i.textContent=`Quantum Method Meditation Foundation Course`;
					}else if(i.classList.contains(`trainingTopic`)){
						i.textContent=`Mind Development and Self-Improvement`;
					}else if(i.classList.contains(`trainingInstitute`)){
						i.textContent=`Yoga Foundation, Bangladesh`;
					}else if(i.classList.contains(`trainingCountry`)){
						i.textContent=`Bangladesh`;
					}else if(i.classList.contains(`trainingLocation`)){
						i.textContent=`Dhaka`;
					}else if(i.classList.contains(`trainingYear`)){
						i.textContent=`2011`;
					}else if(i.classList.contains(`trainingDuration`)){
						i.textContent=`04 Days`;
					}
				}
				break;

				case `trngBtn7`:
				for(let i of trainingDetails){
					if(i.classList.contains(`trainingTitle`)){
						i.textContent=`Data Analysis and Research`;
					}else if(i.classList.contains(`trainingTopic`)){
						i.textContent=`Table Interpretation, Generating Graph, Questionnaire Development, Coding & Retranslation, Analysis & Data Entry, Descriptive Analysis, Correlation, Trend Analysis & Regression, Sample size selection, Sampling Technique, Types of MR (Quant-Qual)`;
					}else if(i.classList.contains(`trainingInstitute`)){
						i.textContent=`BDJOBS Training`;
					}else if(i.classList.contains(`trainingCountry`)){
						i.textContent=`Bangladesh`;
					}else if(i.classList.contains(`trainingLocation`)){
						i.textContent=`Dhaka`;
					}else if(i.classList.contains(`trainingYear`)){
						i.textContent=`2011`;
					}else if(i.classList.contains(`trainingDuration`)){
						i.textContent=`02 Days`;
					}
				}
				break;

				case `trngBtn8`:
				for(let i of trainingDetails){
					if(i.classList.contains(`trainingTitle`)){
						i.textContent=`Sustainable Project Design & Writing Quality Proposal`;
					}else if(i.classList.contains(`trainingTopic`)){
						i.textContent=`Writing project proposal`;
					}else if(i.classList.contains(`trainingInstitute`)){
						i.textContent=`MDC Bangladesh Consultants Ltd.`;
					}else if(i.classList.contains(`trainingCountry`)){
						i.textContent=`Bangladesh`;
					}else if(i.classList.contains(`trainingLocation`)){
						i.textContent=`Dhaka`;
					}else if(i.classList.contains(`trainingYear`)){
						i.textContent=`2008`;
					}else if(i.classList.contains(`trainingDuration`)){
						i.textContent=`01 Week`;
					}
				}
				break;

				case `trngBtn9`:
				for(let i of trainingDetails){
					if(i.classList.contains(`trainingTitle`)){
						i.textContent=`Applied Research Methodology in Business`;
					}else if(i.classList.contains(`trainingTopic`)){
						i.textContent=`Research Methodology`;
					}else if(i.classList.contains(`trainingInstitute`)){
						i.textContent=`Bureau of Business Research`;
					}else if(i.classList.contains(`trainingCountry`)){
						i.textContent=`Bangladesh`;
					}else if(i.classList.contains(`trainingLocation`)){
						i.textContent=`Dhaka`;
					}else if(i.classList.contains(`trainingYear`)){
						i.textContent=`2007`;
					}else if(i.classList.contains(`trainingDuration`)){
						i.textContent=`06 Weeks`;
					}
				}
				break;

				default:
				for(let i of trainingDetails){
					if(i.classList.contains(`trainingTitle`)){
						i.textContent=``;
					}else if(i.classList.contains(`trainingTopic`)){
						i.textContent=``;
					}else if(i.classList.contains(`trainingInstitute`)){
						i.textContent=``;
					}else if(i.classList.contains(`trainingCountry`)){
						i.textContent=``;
					}else if(i.classList.contains(`trainingLocation`)){
						i.textContent=``;
					}else if(i.classList.contains(`trainingYear`)){
						i.textContent=``;
					}else if(i.classList.contains(`trainingDuration`)){
						i.textContent=``;
					}
				}
				break;

		}
	});
}

/* Training Details end */









/* Skillset */

document.addEventListener("DOMContentLoaded", function() {
  const skillBars = document.querySelectorAll(".skill-progress");
  
  skillBars.forEach(skillBar => {
    const skillLevel = parseFloat(skillBar.style.width) || 0;
    skillBar.style.width = skillLevel + "%";
  });
});


/* Skillset ends */









/* Contact */

document.getElementById("contactForm").addEventListener("submit", function(event) {
	event.preventDefault();
	alert("Form submitted!");
});

/* Contact ends */









/* Responsive Menu */

const resMenu=document.querySelector(`.resMenu`);
const modalMM=document.querySelector(`.modalMM`);
modalMM.style.display=`none`;
const mm=document.querySelector(`.mm`);

resMenu.addEventListener(`click`,()=>{
	mm.style.display=`none`;
	if(modalMM.style.display===`none`){
		modalMM.style.display=`block`;

		if(mm.style.display===`none`){
			mm.style.display=`grid`;
			modalMM.append(mm);
		}else{
			mm.style.display=`none`;
		}
	}else{
		modalMM.style.display=`none`;
	}
});

/* Responsive Menu ends */









/* Responsive */

const tButtons=document.querySelectorAll(`.tab-buttons`);
const edus=document.querySelectorAll(`.edus`);
const trainingBtns=document.querySelectorAll(`.trainingBtns`);
const skls=document.querySelectorAll(`.skls`);

if(screen.width<=480){
	for(let i of tButtons){
		i.classList.remove(`allColumns`);
		i.classList.add(`threeColumns`);
	}

	for(let i of trainingBtns){
		i.classList.remove(`trainingBtns`);
		i.classList.add(`threeColumns`);
	}

	for(let i of skls){
		i.classList.remove(`skls`);
		i.classList.add(`allRows`);
	}
}

/* Responsive ends */









/* Achievement Photos */

const hnrs_phts=document.querySelector(`.hnrs_phts`);
const pht=document.querySelectorAll(`.hnrs_phts img`);
let phtIndex=0;
const phtPrev=document.querySelector(`.phtPrev`);
const phtNext=document.querySelector(`.phtNext`);

function resetPhts(){
	for(let a of pht){
		a.style.display=`none`;
	}
}

resetPhts();
pht[phtIndex].style.display=`block`;

function prevPht(){
	resetPhts();
	phtIndex--;
	if(phtIndex<0){
		phtIndex=pht.length-1;
		pht[phtIndex].style.display=`block`;
	}else{
		pht[phtIndex].style.display=`block`;
	}
}

function nextPht(){
	resetPhts();
	phtIndex++;
	if(phtIndex>=pht.length){
		phtIndex=0;
		pht[phtIndex].style.display=`block`;
	}else{
		pht[phtIndex].style.display=`block`;
	}
}

phtPrev.addEventListener(`click`,prevPht);
phtNext.addEventListener(`click`,nextPht);

/* Achievement Photos end */