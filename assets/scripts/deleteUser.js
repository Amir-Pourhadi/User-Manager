if (window.location.pathname === "/") {
  const $ondelete = $("table tbody td a.delete");
  $ondelete.click(function () {
    const id = $(this).attr("data-id");

    const request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(() => {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
}
