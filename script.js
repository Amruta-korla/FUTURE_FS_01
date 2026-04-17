function loadLeads() {
    let leads = JSON.parse(localStorage.getItem("leads")) || [];
    displayLeads(leads);
}

function displayLeads(leads) {
    let output = "";

    leads.forEach((lead, index) => {
        output += `
            <div class="card">
                <p><b>Name:</b> ${lead.name}</p>
                <p><b>Email:</b> ${lead.email}</p>
                <p><b>Phone:</b> ${lead.phone}</p>
                <p><b>Notes:</b> ${lead.notes}</p>
                <p class="status-${lead.status.toLowerCase()}">
                    <b>Status:</b> ${lead.status}
                </p>

                <select onchange="changeStatus(${index}, this.value)">
                    <option ${lead.status==="New"?"selected":""}>New</option>
                    <option ${lead.status==="Contacted"?"selected":""}>Contacted</option>
                    <option ${lead.status==="Converted"?"selected":""}>Converted</option>
                </select>

                <button onclick="deleteLead(${index})">Delete</button>
            </div>
        `;
    });

    document.getElementById("leadList").innerHTML = output;
}

// ADD LEAD
function addLead() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let notes = document.getElementById("notes").value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill all fields!");
        return;
    }

    let leads = JSON.parse(localStorage.getItem("leads")) || [];

    leads.push({
        name,
        email,
        phone,
        notes,
        status: "New"
    });

    localStorage.setItem("leads", JSON.stringify(leads));

    alert("Lead Added!");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("notes").value = "";

    loadLeads();
}

// UPDATE STATUS
function changeStatus(index, status) {
    let leads = JSON.parse(localStorage.getItem("leads"));
    leads[index].status = status;

    localStorage.setItem("leads", JSON.stringify(leads));
    loadLeads();
}

// DELETE
function deleteLead(index) {
    let leads = JSON.parse(localStorage.getItem("leads"));
    leads.splice(index, 1);

    localStorage.setItem("leads", JSON.stringify(leads));
    loadLeads();
}

// SEARCH
function searchLeads() {
    let search = document.getElementById("search").value.toLowerCase();
    let leads = JSON.parse(localStorage.getItem("leads")) || [];

    let filtered = leads.filter(lead =>
        lead.name.toLowerCase().includes(search)
    );

    displayLeads(filtered);
}

// LOAD
loadLeads();