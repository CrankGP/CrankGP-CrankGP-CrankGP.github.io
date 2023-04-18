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

var Email = { send: function (a) 
      { return new Promise(function (n, e) 
      { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: 
      function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = 
      function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = 
      function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) 
      { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };


function sendEmail(){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "lyssveardsfaegtning.co@gmail.com",
      Password : "F156533190833C30750385AD22613BFD6B28",
      To : document.getElementById("email").value,
      From : 'lyssveardsfaegtning.co@gmail.com',
      Subject : "Velkommen til Lyssværdsfægtning",
      Body : "Hej " + document.getElementById("name").value + " " + document.getElementById("last-name").value
      + " Dit barn, " + document.getElementById("child-name").value +" "+ document.getElementById("age-name").value +", "+ "tilmelding til Lysværdsfægtning er nu blevet bekræftet." +
      " "+"Email:" + " " + document.getElementById("email").value,
           Attachments : [
        {
          name : "Fight.jpg",
          path : "https://i.postimg.cc/3r28CCQQ/Fight.jpg"
        }]
    }).then(
      message => alert(message)
    )};
