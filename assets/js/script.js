// ============================================================
//  DigiTeach — Form Submission Handler
//  Captures form data and sends it to a Google Apps Script
//  Web App, which appends each submission as a new row in a
//  Google Spreadsheet.
//
//  SETUP REQUIRED:
//  1. Open your target Google Sheet
//  2. Extensions -> Apps Script -> paste the code from README.md
//  3. Deploy -> New deployment -> Web app
//     (Execute as: Me, Who has access: Anyone)
//  4. Copy the Web App URL and paste it below as GAS_URL
// ============================================================

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbzKmlDjt5P5euUXhNPfguNuu--sIFKMrPIxpkMZqbQkzmlzBZkSvRHMXLvQU4gAmlEF/exec";

// Feedback message helper
function showFeedback(form, message, isError) {
  let feedback = form.querySelector(".form-feedback");
  if (!feedback) {
    feedback = document.createElement("div");
    feedback.className = "form-feedback";
    form.appendChild(feedback);
  }
  feedback.textContent = message;
  feedback.classList.toggle("error", isError);
  feedback.classList.toggle("success", !isError);
  feedback.style.display = "block";
}

// Validate required fields and return collected data
function collectFormData(form) {
  const inputs = form.querySelectorAll(
    "input, select, textarea"
  );
  const data = {};
  let valid = true;

  inputs.forEach((input) => {
    if (input.type === "checkbox") {
      data[input.name] = input.checked ? "Yes" : "No";
      return;
    }
    if (input.type === "hidden") {
      data[input.name] = input.value;
      return;
    }
    data[input.name] = input.value.trim();
    if (input.required && !data[input.name]) {
      valid = false;
      input.classList.add("input-error");
    } else {
      input.classList.remove("input-error");
    }
  });

  return { data, valid };
}

// Submit handler for both forms
async function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const submitBtn = form.querySelector("button[type='submit']");
  const originalLabel = submitBtn ? submitBtn.textContent : "";

  const { data, valid } = collectFormData(form);

  if (!valid) {
    showFeedback(form, "Please fill in all required fields.", true);
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
  }

  try {
    const response = await fetch(GAS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(data),
    });

    // With mode: "no-cors" we can't read the response body,
    // so we optimistically assume success.
    showFeedback(
      form,
      "Thank you! Your message has been sent successfully.",
      false
    );
    form.reset();
  } catch (err) {
    showFeedback(
      form,
      "Sorry, something went wrong. Please try again.",
      true
    );
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  }
}

// Attach handlers once DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const involvedForm = document.getElementById("getInvolvedForm");

  if (contactForm) {
    contactForm.addEventListener("submit", handleSubmit);
  }
  if (involvedForm) {
    involvedForm.addEventListener("submit", handleSubmit);
  }
});
