let internships = [
{ id:1, role:"Frontend", company:"Google", location:"Remote", stipend:30000, batch:"2025", logo:"https://logo.clearbit.com/google.com" },
{ id:2, role:"Backend", company:"Amazon", location:"Delhi", stipend:40000, batch:"2024", logo:"https://logo.clearbit.com/amazon.com" },
{ id:3, role:"Data", company:"Microsoft", location:"Bangalore", stipend:35000, batch:"2025", logo:"https://logo.clearbit.com/microsoft.com" },
{ id:4, role:"AI", company:"Adobe", location:"Remote", stipend:45000, batch:"2024", logo:"https://logo.clearbit.com/adobe.com" },
{ id:5, role:"Frontend", company:"Flipkart", location:"Delhi", stipend:25000, batch:"2025", logo:"https://logo.clearbit.com/flipkart.com" },
{ id:6, role:"Backend", company:"Oracle", location:"Remote", stipend:38000, batch:"2024", logo:"https://logo.clearbit.com/oracle.com" },
{ id:7, role:"Data", company:"Deloitte", location:"Bangalore", stipend:28000, batch:"2025", logo:"https://logo.clearbit.com/deloitte.com" },
{ id:8, role:"AI", company:"Meta", location:"Remote", stipend:55000, batch:"2024", logo:"https://logo.clearbit.com/facebook.com" },
{ id:9, role:"Frontend", company:"Paytm", location:"Noida", stipend:22000, batch:"2025", logo:"https://logo.clearbit.com/paytm.com" },
{ id:10, role:"Backend", company:"Infosys", location:"Pune", stipend:20000, batch:"2025", logo:"https://logo.clearbit.com/infosys.com" },
{ id:11, role:"Data", company:"TCS", location:"Mumbai", stipend:18000, batch:"2024", logo:"https://logo.clearbit.com/tataconsultancyservices.com" },
{ id:12, role:"AI", company:"Wipro", location:"Hyderabad", stipend:21000, batch:"2025", logo:"https://logo.clearbit.com/wipro.com" },
{ id:13, role:"Frontend", company:"Zomato", location:"Gurgaon", stipend:27000, batch:"2024", logo:"https://logo.clearbit.com/zomato.com" },
{ id:14, role:"Backend", company:"Swiggy", location:"Bangalore", stipend:26000, batch:"2025", logo:"https://logo.clearbit.com/swiggy.com" },
{ id:15, role:"Data", company:"Accenture", location:"Chennai", stipend:30000, batch:"2024", logo:"https://logo.clearbit.com/accenture.com" }
];

let applications = JSON.parse(localStorage.getItem("applications")) || [];

function renderInternships(list=internships){
    const container=document.getElementById("internshipContainer");
    if(!container) return;

    container.innerHTML="";
    document.getElementById("appliedCount").innerText=applications.length;

    list.forEach(item=>{
        let isApplied=applications.some(app=>app.id===item.id);

        container.innerHTML+=`
<div class="card">
    <div class="top">
       <img src="${item.logo}" 
     class="logo"
     onerror="this.src='https://via.placeholder.com/60?text=${item.company[0]}'">
        <div>
            <h3>${item.role} Intern</h3>
            <p class="company">${item.company}</p>
        </div>
    </div>
    
    <div class="info">
        <span>📍 ${item.location}</span>
        <span>💰 ₹${item.stipend}/month</span>
        <span>🎓 Batch ${item.batch}</span>
    </div>

    <button class="apply-btn ${isApplied?'applied':''}" 
        onclick="applyInternship(${item.id})">
        ${isApplied?'Applied':'Apply'}
    </button>
</div>`;
    });
}

function applyInternship(id){
    let selected=internships.find(i=>i.id===id);
    if(!applications.some(app=>app.id===id)){
        applications.push(selected);
        localStorage.setItem("applications",JSON.stringify(applications));
    }
    renderInternships();
}

function renderApplicationsPage(){
    const container=document.getElementById("applicationsContainer");
    container.innerHTML="";

    if(applications.length===0){
        container.innerHTML="<h3>No internships applied yet.</h3>";
        return;
    }

    applications.forEach(item=>{
        container.innerHTML+=`
        <div class="card">
            <img src="${item.logo}" class="logo">
            <h3>${item.role} Intern</h3>
            <p class="company">${item.company}</p>
            <button class="delete-btn" onclick="removeApplication(${item.id})">
                Remove
            </button>
        </div>`;
    });
}

function removeApplication(id){
    applications=applications.filter(app=>app.id!==id);
    localStorage.setItem("applications",JSON.stringify(applications));
    renderApplicationsPage();
}

document.querySelectorAll("#roleFilter,#locationFilter,#stipendFilter,#searchInput")
.forEach(el=>{
    el.addEventListener("input",filterInternships);
});

function filterInternships(){
    let role=document.getElementById("roleFilter").value;
    let location=document.getElementById("locationFilter").value;
    let stipend=document.getElementById("stipendFilter").value;
    let batch=document.getElementById("batchFilter").value;
    let search=document.getElementById("searchInput").value.toLowerCase();

    let filtered=internships.filter(i=>
        (!role||i.role===role) &&
        (!location||i.location===location) &&
        (!stipend||i.stipend>=stipend) &&
        (!batch||i.batch===batch) &&
        i.company.toLowerCase().includes(search)
    );

    renderInternships(filtered);
}

renderInternships();