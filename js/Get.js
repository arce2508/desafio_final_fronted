const getPost = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let response = JSON.parse(this.responseText);
      console.log(response);
    }
  };
  xhttp.open(
    "GET",
    "https://finalproject-f130e-default-rtdb.firebaseio.com/Post/.json",
    true
  );
  xhttp.send();
};

const printPostData = () => {
  const wrapper = document.creaElement("article");
  let articleObject = { article };
  console.log(articleObject);
};
