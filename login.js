//drop down bx

const daySelect = document.getElementById('day');
daySelect.add(new Option('Day', ''));
for(let i = 1; i <= 31; i++) {
    daySelect.add(new Option(i, i));
}
const monthSelect = document.getElementById('month');
monthSelect.add(new Option('month', ''));
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
months.forEach((month, index) => {
    monthSelect.add(new Option(month, index + 1));
});
const yearSelect = document.getElementById('year');
yearSelect.add(new Option('year', ''));
for(let i = 1970; i <= 2027; i++) {
    yearSelect.add(new Option(i, i));
}
const genderSelect = document.getElementById('gender');
genderSelect.add(new Option('select your gender', ''));
const genders = ['Male', 'Female', 'Custom'];
genders.forEach((item) => {
    genderSelect.add(new Option(item, item));
});


// data collection

const form = document.getElementById("fjs");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const firstNameValue = document.getElementById("firstName").value;
  const secondNameValue = document.getElementById("lastName").value;
  const GenderValue = document.getElementById("gender").value;
  const dateValue = document.getElementById("day").value;
  const monthValue = document.getElementById("month").value;
  const yearValue = document.getElementById("year").value;
  const phoneValue = document.getElementById("phone").value;
  const passwordValue = document.getElementById("password").value;

  console.log(" First Name:", firstNameValue);
  console.log(" Second Name:", secondNameValue);
  console.log(" Gender:", GenderValue);
  console.log(" Date of Birth:", `${dateValue}-${monthValue}-${yearValue}`);
  console.log(" Phone Number:", phoneValue);
  console.log(" Password:", passwordValue);
});