var productListAllData = [
    { id: 1, product: { img: "assets/images/products/img-1.png", title: "Half Sleeve Round Neck T-Shirts", category: "Fashion" }, price: "215.00", status: "available" },
    { id: 2, product: { img: "assets/images/products/img-2.png", title: "Urban Ladder Pashe Chair", category: "Furniture" }, price: "160.00", status: "availble" },
    { id: 3, product: { img: "assets/images/products/img-3.png", title: "350 ml Glass Pork Meals Container", category: "Pork Meals" }, price: "125.00", status: "not available" },
    { id: 4, product: { img: "assets/images/products/img-4.png", title: "Fabric Dual Tone Living Room Chair", category: "Furniture" }, price: "340.00", status: "available" },
    { id: 5, product: { img: "assets/images/products/img-5.png", title: "Crux Motorsports Helmet", category: "Automotive Accessories" }, stock: "08", price: "175.00", status: "available" },
    { id: 6, product: { img: "assets/images/products/img-6.png", title: "Half Sleeve T-Shirts (Blue)", category: "Fashion" }, price: "225.00", status: "not available" },
    { id: 7, product: { img: "assets/images/products/img-7.png", title: "Noise Evolve Smartwatch", category: "Watches" }, price: "105.00", orders: "45", status: "not available" },
    { id: 8, product: { img: "assets/images/products/img-8.png", title: "Sweatshirt for Men (Pink)", category: "Fashion" }, price: "120.00", status: "available" },
    { id: 9, product: { img: "assets/images/products/img-9.png", title: "Reusable Ecological Coffee Cup", category: "Pork Meals" }, price: "325.00", status: "available" },
    { id: 10, product: { img: "assets/images/products/img-10.png", title: "Travel Carrying Pouch Bag", category: "Kids" },price: "180.00", status: "available" },
    { id: 11, product: { img: "assets/images/products/img-10.png", title: "Travel Carrying Pouch Bag", category: "Kids" },price: "180.00", status: "not available" }
  ];
  
  new gridjs.Grid({
    columns: [
      { name: "", width: "40px", sort: { enabled: !1 }, data: function (e) { return gridjs.html('<div class="form-check checkbox-product-list"><input class="form-check-input" type="checkbox" value="' + e.id + '" id="checkbox-' + e.id + '"><label class="form-check-label" for="checkbox-' + e.id + '"></label></div>'); } },
      { name: "Product", width: "360px", data: function (e) { return gridjs.html('<div class="d-flex align-items-center"><div class="flex-shrink-0 me-3"><div class="avatar-sm bg-light rounded p-1"><img src="' + e.product.img + '" alt="" class="img-fluid d-block"></div></div><div class="flex-grow-1"><h5 class="fs-14 mb-1"><a href="apps-ecommerce-product-details.html" class="text-body">' + e.product.title + '</a></h5><p class="text-muted mb-0">Category : <span class="fw-medium">' + e.product.category + "</span></p></div></div>"); } },
      { name: "Price", width: "101px", formatter: function (e) { return gridjs.html("$" + e); } },
      { name: "Status", width: "105px", formatter: function (e) { return gridjs.html('<span class="badge bg-light text-body fs-12 fw-medium">' + e + "</span>"); } },
      { name: "Action", width: "80px", sort: { enabled: !1 }, formatter: function (e, t) { t = (new DOMParser).parseFromString(t._cells[0].data.props.content, "text/html").body.querySelector(".checkbox-product-list .form-check-input").value; return gridjs.html('<div class="dropdown"><button class="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="ri-more-fill"></i></button><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="apps-ecommerce-product-details.html"><i class="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li><li><a class="dropdown-item edit-list" data-edit-id=' + t + ' href="apps-ecommerce-add-product.html"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a></li><li class="dropdown-divider"></li><li><a class="dropdown-item remove-list" href="#" data-id=' + t + ' data-bs-toggle="modal" data-bs-target="#removeItemModal"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</a></li></ul></div>'); } }
    ],
    className: { th: "text-muted" },
    pagination: { limit: 5 },
    sort: !0,
    data: productListAllData
  }).render(document.getElementById("table-product-list-all"));

  var productListAvailable = [
    { id: 1, product: { img: "assets/images/products/img-1.png", title: "Half Sleeve Round Neck T-Shirts", category: "Fashion" }, price: "215.00", status: "available" },
    { id: 2, product: { img: "assets/images/products/img-2.png", title: "Urban Ladder Pashe Chair", category: "Furniture" }, price: "160.00", status: "availble" },
    { id: 4, product: { img: "assets/images/products/img-4.png", title: "Fabric Dual Tone Living Room Chair", category: "Furniture" }, price: "340.00", status: "available" },
    { id: 5, product: { img: "assets/images/products/img-5.png", title: "Crux Motorsports Helmet", category: "Automotive Accessories" }, stock: "08", price: "175.00", status: "available" },
    { id: 8, product: { img: "assets/images/products/img-8.png", title: "Sweatshirt for Men (Pink)", category: "Fashion" }, price: "120.00", status: "available" },
    { id: 9, product: { img: "assets/images/products/img-9.png", title: "Reusable Ecological Coffee Cup", category: "Pork Meals" }, price: "325.00", status: "available" },
    { id: 10, product: { img: "assets/images/products/img-10.png", title: "Travel Carrying Pouch Bag", category: "Kids" },price: "180.00", status: "available" }
  ];
  
  new gridjs.Grid({
    columns: [
      { name: "#", width: "40px", sort: { enabled: !1 }, data: function (e) { return gridjs.html('<div class="form-check checkbox-product-list"><input class="form-check-input" type="checkbox" value="' + e.id + '" id="checkbox-' + e.id + '"><label class="form-check-label" for="checkbox-' + e.id + '"></label></div>'); } },
      { name: "Product", width: "360px", data: function (e) { return gridjs.html('<div class="d-flex align-items-center"><div class="flex-shrink-0 me-3"><div class="avatar-sm bg-light rounded p-1"><img src="' + e.product.img + '" alt="" class="img-fluid d-block"></div></div><div class="flex-grow-1"><h5 class="fs-14 mb-1"><a href="apps-ecommerce-product-details.html" class="text-body">' + e.product.title + '</a></h5><p class="text-muted mb-0">Category : <span class="fw-medium">' + e.product.category + "</span></p></div></div>"); } },
      { name: "Price", width: "101px", formatter: function (e) { return gridjs.html("$" + e); } },
      { name: "Status", width: "105px", formatter: function (e) { return gridjs.html('<span class="badge bg-light text-body fs-12 fw-medium">' + e + "</span>"); } },
      { name: "Action", width: "80px", sort: { enabled: !1 }, formatter: function (e, t) { t = (new DOMParser).parseFromString(t._cells[0].data.props.content, "text/html").body.querySelector(".checkbox-product-list .form-check-input").value; return gridjs.html('<div class="dropdown"><button class="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="ri-more-fill"></i></button><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="apps-ecommerce-product-details.html"><i class="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li><li><a class="dropdown-item edit-list" data-edit-id=' + t + ' href="apps-ecommerce-add-product.html"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a></li><li class="dropdown-divider"></li><li><a class="dropdown-item remove-list" href="#" data-id=' + t + ' data-bs-toggle="modal" data-bs-target="#removeItemModal"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</a></li></ul></div>'); } }
    ],
    className: { th: "text-muted" },
    pagination: { limit: 5 },
    sort: !0,
    data: productListAvailable
  }).render(document.getElementById("table-product-list-available"));

  var productListNotAvailable = [
    { id: 3, product: { img: "assets/images/products/img-3.png", title: "350 ml Glass Pork Meals Container", category: "Pork Meals" }, price: "125.00", status: "not available" },
    { id: 6, product: { img: "assets/images/products/img-6.png", title: "Half Sleeve T-Shirts (Blue)", category: "Fashion" }, price: "225.00", status: "not available" },
    { id: 7, product: { img: "assets/images/products/img-7.png", title: "Noise Evolve Smartwatch", category: "Watches" }, price: "105.00", orders: "45", status: "not available" }
  ];
  
  new gridjs.Grid({
    columns: [
      { name: "#", width: "40px", sort: { enabled: !1 }, data: function (e) { return gridjs.html('<div class="form-check checkbox-product-list"><input class="form-check-input" type="checkbox" value="' + e.id + '" id="checkbox-' + e.id + '"><label class="form-check-label" for="checkbox-' + e.id + '"></label></div>'); } },
      { name: "Product", width: "360px", data: function (e) { return gridjs.html('<div class="d-flex align-items-center"><div class="flex-shrink-0 me-3"><div class="avatar-sm bg-light rounded p-1"><img src="' + e.product.img + '" alt="" class="img-fluid d-block"></div></div><div class="flex-grow-1"><h5 class="fs-14 mb-1"><a href="apps-ecommerce-product-details.html" class="text-body">' + e.product.title + '</a></h5><p class="text-muted mb-0">Category : <span class="fw-medium">' + e.product.category + "</span></p></div></div>"); } },
      { name: "Price", width: "101px", formatter: function (e) { return gridjs.html("$" + e); } },
      { name: "Status", width: "105px", formatter: function (e) { return gridjs.html('<span class="badge bg-light text-body fs-12 fw-medium">' + e + "</span>"); } },
      { name: "Action", width: "80px", sort: { enabled: !1 }, formatter: function (e, t) { t = (new DOMParser).parseFromString(t._cells[0].data.props.content, "text/html").body.querySelector(".checkbox-product-list .form-check-input").value; return gridjs.html('<div class="dropdown"><button class="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="ri-more-fill"></i></button><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="apps-ecommerce-product-details.html"><i class="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li><li><a class="dropdown-item edit-list" data-edit-id=' + t + ' href="apps-ecommerce-add-product.html"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a></li><li class="dropdown-divider"></li><li><a class="dropdown-item remove-list" href="#" data-id=' + t + ' data-bs-toggle="modal" data-bs-target="#removeItemModal"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</a></li></ul></div>'); } }
    ],
    className: { th: "text-muted" },
    pagination: { limit: 5 },
    sort: !0,
    data: productListNotAvailable
  }).render(document.getElementById("table-product-list-not-available"));