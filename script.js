    // Function to update live preview
    function updatePreview(id, previewId) {
        document.getElementById(id).addEventListener('input', function () {
            document.getElementById(previewId).textContent = this.value || '';
        });
    }
    

    // Personal Information
    updatePreview('name', 'previewName');
    updatePreview('email', 'previewEmail');
    updatePreview('phone', 'previewPhone');
    updatePreview('location', 'previewLocation');
    updatePreview('summary', 'previewSummary');



    // Checkbox for experience
    document.getElementById("currentlyWorking").addEventListener("change", function () {
        const endDateInput = document.getElementById("endDate");
        const previewEndDate = document.getElementById("previewEndDate");

        if (this.checked) {
            endDateInput.value = ""; // Clear existing value
            endDateInput.disabled = true; // Disable input
            previewEndDate.textContent = "Present"; // Show "Present" in preview
        } else {
            endDateInput.disabled = false; // Enable input
            previewEndDate.textContent = endDateInput.value || ""; // Restore input value in preview
        }
    });

    // Update preview when user types
    document.getElementById("endDate").addEventListener("input", function () {
        document.getElementById("previewEndDate").textContent = this.value || "";
    });


    // code to add new form
    document.getElementById('addExperience').addEventListener('click', function(event) {
        event.preventDefault();
    
        // Get values from the form
        const company = document.getElementById('company').value;
        const position = document.getElementById('position').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const currentlyWorking = document.getElementById('currentlyWorking').checked ? "Currently working here" : "Not currently working";
        const jobDescription = document.getElementById('jobDescription').value;
    
        // Create a new experience entry in preview
        const experienceEntry = document.createElement('div');
        experienceEntry.classList.add('experience-entry', 'mb-4');
    
        experienceEntry.innerHTML = `
            <p class="font-semibold">
                <span>${company}</span>, <span>${position}</span>
            </p>
            <p class="italic text-black">
                <span>${startDate}</span> - <span>${currentlyWorking === "Currently working here" ? "Present" : endDate}</span>
            </p>
            <p>${jobDescription}</p>

        `;
    
        // Append the new entry to the preview container
        document.getElementById('experiencePreview').appendChild(experienceEntry);
    
        // Clear the form fields for the next input
        document.getElementById('company').value = '';
        document.getElementById('position').value = '';
        document.getElementById('startDate').value = '';
        document.getElementById('endDate').value = '';
        document.getElementById('currentlyWorking').checked = false;
        document.getElementById('jobDescription').value = '';


        // Explicitly enable the endDate field if the checkbox is unchecked
        document.getElementById('endDate').disabled = false;
    });
    
    

    // Code to add new form
    document.getElementById('addEducation').addEventListener('click', function(event) {
        event.preventDefault();
    
        // Get values from the form
        const school = document.getElementById('school').value;
        const degree = document.getElementById('degree').value;
        const eduStartDate = document.getElementById('eduStartDate').value;
        const eduEndDate = document.getElementById('eduEndDate').value;
        const currentlyStudying = document.getElementById('currentlyStudying').checked ? "Currently working here" : "Not currently working";
    
        // Create a new experience entry in preview
        const educationEntry = document.createElement('div');
        educationEntry.classList.add('education-entry', 'mb-4');
    
        educationEntry.innerHTML = `
        <p class="font-semibold"><span>${school}</p></span>
        <p class="italic text-black">
            <span>${degree}</span>, 
            <span>${eduStartDate}</span> -
            <span>${currentlyStudying === "Currently working here" ? "Present" : eduEndDate}</span>
        </p>
    `;
    
        // Append the new entry to the preview container
        document.getElementById('educationPreview').appendChild(educationEntry);
    
        // Clear the form fields for the next input
        document.getElementById('school').value = '';
        document.getElementById('degree').value = '';
        document.getElementById('eduStartDate').value = '';
        document.getElementById('eduEndDate').value = '';
        document.getElementById('currentlyStudying').checked = false;

        // Explicitly enable the endDate field if the checkbox is unchecked
        document.getElementById('eduEndDate').disabled = false;
    });



    // Checkbox for Education
    document.getElementById("currentlyStudying").addEventListener("change", function () {
        const endDateInput = document.getElementById("eduEndDate");
        const previewEduEndDate = document.getElementById("previewEduEndDate");
    
        if (this.checked) {
            endDateInput.value = ""; // Clear existing value
            endDateInput.disabled = true; // Disable input
            previewEduEndDate.textContent = "Present"; // Show "Present" in preview
        } else {
            endDateInput.disabled = false; // Enable input
            previewEduEndDate.textContent = endDateInput.value; // Restore input value in preview
        }
    });
    
    // Update preview when user types
    document.getElementById("eduEndDate").addEventListener("input", function () {
        document.getElementById("previewEduEndDate").textContent = this.value || "";
    });
    

    
    // Skills section
    document.getElementById('addSkill').addEventListener('click', function(event) {
        event.preventDefault();
    
        // Get values from the form
        const skillset = document.getElementById('skillset').value;
    
        // Create a new experience entry in preview
        const skillEntry = document.createElement('div');
        skillEntry.classList.add('skill-entry','mb-4');
    
        skillEntry.innerHTML = `
        <p class="italic"><span>${skillset}</p></span>
    `;
    
        // Append the new entry to the preview container
        document.getElementById('skillPreview').appendChild(skillEntry);
    
        // Clear the form fields for the next input
        document.getElementById('skillset').value = '';
    });

    

    
    // Tab switching functionality
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('border-black', 'text-black'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));

            this.classList.add('border-black', 'text-black');
            document.getElementById(this.getAttribute('data-tab')).classList.remove('hidden');
        });
    });

    // Activate the first tab by default
    document.querySelector('.tab').click();