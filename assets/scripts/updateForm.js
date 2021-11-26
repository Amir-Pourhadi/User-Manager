$("form[action='']").submit(function (event) {
  event.preventDefault();

  const unIndexedArr = $(this).serializeArray();
  const data = {};

  $.map(unIndexedArr, (n) => {
    data[n["name"]] = n["value"];
  });

  const request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(() => {
    alert("Data Updated Successfully!");
    $(location).prop("pathname", "/");
  });
});
