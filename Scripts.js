
    function checkBox(selected) {
      if (selected) {
        document.getElementById("MailInboxDetails").style.display = "";
        document.getElementById("InboxImage").style.display = "none";
        document.getElementById("ParentBox").style.justifyContent = "end";
        document.getElementById("Main--Div").style.position = "";
        document.getElementById("SubDiv").style.position = "";
        document.getElementById("Box").style.justifyContent = "end";


      }
      else {
        document.getElementById("MailInboxDetails").style.display = "none";
        document.getElementById("InboxImage").style.display = "";
        document.getElementById("ParentBox").style.justifyContent = "space-between";
        document.getElementById("Main--Div").style.position = "relative";
        document.getElementById("SubDiv").style.position = "absolute";
        document.getElementById("Box").style.justifyContent = "space-between";
      }
    }
    function checkMe(selected) {
      if (selected) {


        document.getElementById("CardsList").style.display = "";
        document.getElementById("divcheck").style.display = "";
        document.getElementById("divcheck").style.width = "200%";
        document.getElementById("ReadedMsg").style.backgroundColor = "#E4F5F5!important";
        document.getElementById("ActionsMail").style.display = "inline-block";
        document.getElementById("Table").style.display = "none";
      }

      else {
        document.getElementById("Table").style.display = "";
        document.getElementById("divcheck").style.display = "none";
        document.getElementById("CardsList").style.display = "none";
        document.getElementById("ActionsMail").style.display = "none";

      }

    }