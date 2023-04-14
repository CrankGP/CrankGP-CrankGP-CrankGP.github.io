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
      Username : "lyssveardsfaegtning.co@gmail.com",
      Password : "F156533190833C30750385AD22613BFD6B28",
      To : document.getElementById("email").value,
      From : 'lyssveardsfaegtning.co@gmail.com',
      Subject : "Velkommen til Lyssværdsfægtning",
      Body : "Hej " + document.getElementById("name").value + " " + document.getElementById("last-name").value
      + " Din tilmelding til Lysværdsfægtning er nu blevet bekræftet." +
      " "+"Email:" + " " + document.getElementById("email").value,
           Attachments : [
        {
          name : "Fight.jpg",
          path : "https://i.postimg.cc/3r28CCQQ/Fight.jpg"
        }]
    }).then(
      message => alert(message)
    )};
