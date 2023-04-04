const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

function sendEmail(){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "dkcreepercraft@gmail.com",
      Password : "E21638BB876D432387A6DB2780B702D82C21",
      To : document.getElementById("email").value,
      From : 'dkcreepercraft@gmail.com',
      Subject : "Velkommen til Lyssværdsfægtning",
      Body : "Hej " + document.getElementById("name").value 
      + " Din tilmelding til Lysværdsfægtning er nu blevet bekræftet"
  }).then(
    message => alert(message)
  );
  }