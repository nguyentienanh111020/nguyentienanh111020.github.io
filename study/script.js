fetch("https://628b4592667aea3a3e2b48e5.mockapi.io/product")
  .then((response) => response.json())
  .then((data) => {
    $("#main").html();
    console.log(data);
    let newList = data
      .map((a) => {
        return `
     <tr>
                  <td>${a.description}</td>
                  <td>${a.id}</td>
                  <td>${a.name}</td>
                  <td>${a.pice}</td>
                  <td><button onClick="upt(this.id)" id="${a.id}" >update</button>
                  <button  onClick="del(this.id)" id="${a.id}" >delete</button></td>
              </tr>`;
      })
      .join(",")
      .replaceAll(/,/g, " ");
    document.querySelector("tbody").innerHTML = newList;
  });

function add() {
  $("#form").css("display", "block");
}
$("#add").click(add);

function upt(clicked_id) {
  $("#update-form").css("display", "block");
  let descriptions = $("#descriptions").val();
  let names = $("#names").val();
  let prices = $("#prices").val();
  let clid = clicked_id;
  fetch("https://628b4592667aea3a3e2b48e5.mockapi.io/product/" + clid, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      name: names,
      description: descriptions,
      pice: prices,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      //hiển thị thông tin products lên trang
      console.log(data);
      window.location.reload();
    });
}

function del(clicked_id) {
  let clid = clicked_id;
  $.ajax({
    method: "DELETE",
    url: "https://628b4592667aea3a3e2b48e5.mockapi.io/product/" + clid,
  }).done(function (products) {
    console.log(products);
    window.location.reload();
  });
}

function submit() {
  let description = $("#description").val();
  let name = $("#name").val();
  let price = $("#price").val();
  $.ajax({
    method: "POST",
    url: "https://628b4592667aea3a3e2b48e5.mockapi.io/product",
    data: {
      name: name,
      description: description,
      pice: price,
    },
  }).done(function (products) {
    console.log(products);
    window.location.reload();
  });
}
$("#submit").click(submit);
